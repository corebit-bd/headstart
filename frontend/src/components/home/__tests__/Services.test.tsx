import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Services from "../Services";

describe("Services Component", () => {
  it("renders the Section Heading correctly", () => {
    render(<Services />);

    const heading = screen.getByRole("heading", {
      level: 2,
      name: /Our Services/i,
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("font-heading", "text-3xl", "font-bold");
  });

  it("renders all 4 Service Cards", () => {
    render(<Services />);

    const serviceNames = ["ACCA Courses", "Advisory", "Trainings", "SDC"];

    serviceNames.forEach((name) => {
      const serviceHeading = screen.getByRole("heading", {
        level: 3,
        name: name,
      });
      expect(serviceHeading).toBeInTheDocument();
      expect(serviceHeading).toHaveClass("text-brand-purple-1000");
    });
  });

  it("renders Service Descriptions with correct Styling", () => {
    render(<Services />);

    // Testing a specific Description to verify Typography Classes
    const description = screen.getByText(
      /Gold-standard academic training for future leaders/i,
    );
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass("font-body", "text-sm", "text-black-800");
  });

  it("applies the correct Layout & Background Classes to the Section", () => {
    const { container } = render(<Services />);
    const section = container.querySelector("section");

    expect(section).toHaveClass("bg-brand-gold-50", "py-24");
  });

  it("verifies the Card Container has Hover & Border Styles", () => {
    render(<Services />);

    // Target the Card for "Advisory"
    const advisoryHeading = screen.getByText("Advisory");
    const cardContainer = advisoryHeading.closest("div");

    expect(cardContainer).toHaveClass(
      "rounded-xl",
      "bg-brand-grey-50",
      "border-brand-grey-1000",
      "hover:border-brand-gold-300",
      "hover:bg-brand-gold-900",
      "transition-colors",
    );
  });
});
