import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactPage from "../page";

describe("ContactPage Component", () => {
  // Mock console.log to keep Test Output clean
  beforeAll(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("renders the Main Heading & Introductory Text", () => {
    render(<ContactPage />);
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Have a question for our Academic or Advisory wing?/i),
    ).toBeInTheDocument();
  });

  it("shows Validation Errors when submitting an Empty Form", () => {
    render(<ContactPage />);

    const submitButton = screen.getByRole("button", { name: /Send Inquiry/i });
    fireEvent.click(submitButton);

    expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Valid email is required/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Message must be at least 10 characters/i),
    ).toBeInTheDocument();
  });

  it("updates Input Values on User Interaction", () => {
    render(<ContactPage />);

    const nameInput = screen.getByLabelText(/Full Name/i) as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: "Jeet Khondker" } });

    expect(nameInput.value).toBe("Jeet Khondker");
  });

  it("successfully Submits the Form & shows the Success Message", () => {
    render(<ContactPage />);

    fireEvent.change(screen.getByLabelText(/Full Name/i), {
      target: { value: "Jeet Khondker" },
    });
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: "test@corebit.com" },
    });
    fireEvent.change(screen.getByLabelText(/Message/i), {
      target: { value: "This is a detailed inquiry about ACCA courses." },
    });

    const submitButton = screen.getByRole("button", { name: /Send Inquiry/i });
    fireEvent.click(submitButton);

    // Verify success state
    expect(screen.getByText(/Inquiry Received!/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Our team will get back to you within 24 hours/i),
    ).toBeInTheDocument();

    // Ensure Form is removed from DOM
    expect(screen.queryByLabelText(/Full Name/i)).not.toBeInTheDocument();
  });

  it("applies the correct Branding Classes to the Submit Button", () => {
    render(<ContactPage />);
    const submitButton = screen.getByRole("button", { name: /Send Inquiry/i });
    expect(submitButton).toHaveClass("bg-brand-purple-1000");
  });
});
