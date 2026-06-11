import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TrainingsPage from "../page";

describe("TrainingsPage Component", () => {
  it("renders the Main Heading with correct Branding", () => {
    render(<TrainingsPage />);

    // Check for the Sub-Heading (Skill Development)
    expect(screen.getByText(/Skill Development/i)).toBeInTheDocument();
    expect(screen.getByText(/Skill Development/i)).toHaveClass(
      "text-brand-purple-1000",
    );

    // Check for the Main Heading (Professional Trainings)
    expect(
      screen.getByRole("heading", { name: /Professional Trainings/i }),
    ).toBeInTheDocument();
  });

  it("renders the Description with correct Styling", () => {
    render(<TrainingsPage />);
    const description = screen.getByText(
      /Tailored workshops for corporate entities and individual professionals/i,
    );
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass("text-black-600");
  });

  it("renders all 3 Training Course items", () => {
    render(<TrainingsPage />);

    // Check for the specific Course Titles defined in the map Array
    expect(screen.getByText(/Corporate Excel/i)).toBeInTheDocument();
    expect(screen.getByText(/Taxation Workshops/i)).toBeInTheDocument();
    expect(screen.getByText(/Audit Procedures/i)).toBeInTheDocument();
  });

  it("applies the correct Styling & Structure to Course Cards", () => {
    render(<TrainingsPage />);

    // Select the Container for one of the Courses to verify Layout Classes
    const courseCard = screen.getByText(/Corporate Excel/i).closest("div");

    expect(courseCard).toHaveClass("bg-white");
    expect(courseCard).toHaveClass("border-brand-grey-1000");
    expect(courseCard).toHaveClass("hover:shadow-md");
  });

  it("renders 'View Details' Buttons for each Course", () => {
    render(<TrainingsPage />);

    const buttons = screen.getAllByRole("button", { name: /View Details/i });

    // Verify we have 3 Buttons (one for each Course)
    expect(buttons).toHaveLength(3);

    // Verify the Branding Color on the Buttons
    buttons.forEach((button) => {
      expect(button).toHaveClass("bg-brand-purple-1000");
      expect(button).toHaveClass("text-white");
    });
  });
});
