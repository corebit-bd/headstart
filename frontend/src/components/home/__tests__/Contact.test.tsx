import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Contact } from "../Contact";

describe("Contact Component", () => {
  it("renders the Inquiry Heading correctly", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading", {
      level: 2,
      name: /Have an Inquiry\?/i,
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass(
      "font-heading",
      "text-3xl",
      "font-bold",
      "text-black-900",
    );
  });

  it("renders the Name Input Field with correct Attributes", () => {
    render(<Contact />);

    const nameInput = screen.getByPlaceholderText(/Your Name/i);
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveAttribute("type", "text");
    expect(nameInput).toHaveClass(
      "block",
      "w-full",
      "rounded-md",
      "border-0",
      "focus:ring-brand-purple-1000",
    );
  });

  it("renders the Message TextArea with correct Attributes", () => {
    render(<Contact />);

    const textarea = screen.getByPlaceholderText(/How can we help\?/i);
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveAttribute("rows", "4");
    expect(textarea).toHaveClass(
      "block",
      "w-full",
      "rounded-md",
      "focus:ring-brand-purple-1000",
    );
  });

  it("renders the 'Send Message' Button with correct Styling", () => {
    render(<Contact />);

    const button = screen.getByRole("button", { name: /Send Message/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "bg-brand-gold-1000",
      "font-heading",
      "font-bold",
      "text-black-900",
      "transition-all",
    );
  });

  it("applies the correct Layout & Background Classes to the Section", () => {
    const { container } = render(<Contact />);
    const section = container.querySelector("section");

    expect(section).toHaveClass("bg-brand-grey-50", "py-24");
  });

  it("verifies the Form Container Layout", () => {
    const { container } = render(<Contact />);
    const form = container.querySelector("form");

    expect(form).toHaveClass("mt-10", "grid", "grid-cols-1", "gap-y-6");
  });
});
