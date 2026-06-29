import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SDCPage from "../page";

describe("SDCPage Component", () => {
  it("renders the Main Heading with correct Branding", () => {
    render(<SDCPage />);

    // Check for the Main Heading Text
    expect(
      screen.getByText(/Students Development Center/i),
    ).toBeInTheDocument();

    // Verify the SDC Abbreviation has the specific Success Color Class
    const sdcSpan = screen.getByText("(SDC)");
    expect(sdcSpan).toHaveClass("text-success-1000");
  });

  it("renders the Mission Statement / Description", () => {
    render(<SDCPage />);
    const description = screen.getByText(
      /Holistic support focusing on ethics, integrity, and career readiness/i,
    );
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass("text-black-600");
  });

  it("renders all 3 Core Service Cards", () => {
    render(<SDCPage />);

    // Check for Headings
    expect(
      screen.getByRole("heading", { name: /Career Counseling/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Ethics Training/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Mock Interviews/i }),
    ).toBeInTheDocument();
  });

  it("applies the correct Border Branding to Service Cards", () => {
    render(<SDCPage />);

    // Select the Parent Containers of the Headings to check Border Classes
    const careerCard = screen.getByText(/Career Counseling/i).closest("div");
    const ethicsCard = screen.getByText(/Ethics Training/i).closest("div");
    const interviewCard = screen.getByText(/Mock Interviews/i).closest("div");

    expect(careerCard).toHaveClass("border-success-1000");
    expect(ethicsCard).toHaveClass("border-info-1000");
    expect(interviewCard).toHaveClass("border-brand-gold-1000");
  });

  it("renders the correct Descriptions for each Service", () => {
    render(<SDCPage />);

    expect(
      screen.getByText(/Mapping your path from student to professional/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Instilling the core values of professionalism and integrity/i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Simulating real-world scenarios for industry excellence/i,
      ),
    ).toBeInTheDocument();
  });
});
