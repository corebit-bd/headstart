import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ACCAQualificationOverview from "../ACCAQualificationOverview";

// Fixed path: Step up out of __tests__ to find ACCAProfessionalPathway
jest.mock("../ACCAProfessionalPathway", () => {
  return function MockACCAProfessionalPathway() {
    return <div data-testid="mock-professional-pathway">Mocked Pathway Component</div>;
  };
});

describe("ACCA Qualification Overview Component", () => {
  it("renders the Section Heading correctly", () => {
    render(<ACCAQualificationOverview />);

    const heading = screen.getByRole("heading", {
      level: 2,
      name: /Your ACCA Journey Starts Here/i,
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("font-heading", "text-3xl", "font-bold", "text-black-900");
  });

  it("renders the section description text", () => {
    render(<ACCAQualificationOverview />);

    const description = screen.getByText(/The ACCA qualification is a globally recognized pathway/i);
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass("mt-6", "font-body", "text-lg", "text-black-600");
  });

  it("applies the correct Layout & Background Classes to the Section", () => {
    const { container } = render(<ACCAQualificationOverview />);
    const section = container.querySelector("section");

    expect(section).toBeInTheDocument();
    expect(section).toHaveClass("bg-brand-gold-50", "py-24");
  });

  it("renders the child ACCAProfessionalPathway component", () => {
    render(<ACCAQualificationOverview />);
    
    const childComponent = screen.getByTestId("mock-professional-pathway");
    expect(childComponent).toBeInTheDocument();
  });
});