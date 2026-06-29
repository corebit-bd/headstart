import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ACCAPage from "../page";

describe("ACCAPage Component", () => {
  it("renders the Main Heading with correct Branding", () => {
    render(<ACCAPage />);

    // Check for the Main Heading (ACCA Academic Courses)
    const heading = screen.getByRole("heading", {
      name: /ACCA Academic Courses/i,
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("text-brand-purple-1000");
  });

  it("renders the Description with correct Styling", () => {
    render(<ACCAPage />);
    const description = screen.getByText(
      /Comprehensive training modules designed for future financial leaders/i,
    );
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass("text-black-600");
  });

  it("renders all ACCA course Modules", () => {
    render(<ACCAPage />);

    // Check for the specific Course Titles defined in the Page
    expect(screen.getByText(/Applied Knowledge/i)).toBeInTheDocument();
    expect(screen.getByText(/Applied Skills/i)).toBeInTheDocument();
  });

  it("applies the correct Styling & Structure to Course Cards", () => {
    render(<ACCAPage />);

    // Select the Container for one of the Courses to verify Layout Classes
    const courseCard = screen.getByText(/Applied Knowledge/i).closest("div");

    expect(courseCard).toHaveClass("bg-white");
    expect(courseCard).toHaveClass("border-brand-grey-1000");
    expect(courseCard).toHaveClass("rounded-2xl");
  });

  it("verifies the Background & Container Constraints", () => {
    const { container } = render(<ACCAPage />);

    // Check for the brand-grey-50 Background on the Main Wrapper
    const mainWrapper = container.firstChild;
    expect(mainWrapper).toHaveClass("bg-brand-grey-50");

    // Check for the max-width Container
    const innerContainer = container.querySelector(".max-w-7xl");
    expect(innerContainer).toBeInTheDocument();
  });
});
