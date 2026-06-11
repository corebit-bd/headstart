import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Faculty } from "../Faculty";

describe("Faculty Component", () => {
  it("renders the Section Heading correctly", () => {
    render(<Faculty />);

    const heading = screen.getByRole("heading", {
      level: 2,
      name: /Guided by Experts/i,
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("font-heading", "text-3xl", "font-bold");
  });

  it("renders the descriptive paragraph with correct styling", () => {
    render(<Faculty />);

    const paragraph = screen.getByText(
      /Our faculty consists of industry veterans dedicated to your growth/i,
    );
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveClass("font-body", "text-brand-purple-100");
  });

  it("renders the 'Meet the Faculty' button with correct styling and transitions", () => {
    render(<Faculty />);

    const button = screen.getByRole("button", { name: /Meet the Faculty/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "bg-brand-grey-1000",
      "text-brand-purple-1000",
      "border-brand-gold-1000",
      "font-heading",
      "transition-all",
    );
  });

  it("applies the correct layout and background colors to the section", () => {
    const { container } = render(<Faculty />);
    const section = container.querySelector("section");

    // Matches the brand-purple-1000 background and brand-gold-50 text from Faculty.tsx
    expect(section).toHaveClass(
      "bg-brand-purple-1000",
      "text-brand-gold-50",
      "py-20",
    );
  });

  it("ensures the content container is centered and constrained", () => {
    const { container } = render(<Faculty />);
    const innerDiv = container.querySelector("div");

    expect(innerDiv).toHaveClass("mx-auto", "max-w-7xl", "px-4", "text-center");
  });
});
