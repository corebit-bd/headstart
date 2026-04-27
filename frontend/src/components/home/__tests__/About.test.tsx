import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import About from "../About";

describe("About Component", () => {
  it("renders the Main Heading with Highlighted Brand Name", () => {
    render(<About />);
    
    // Target the Heading specifically to avoid Multiple "HeadStart" Matches
    const heading = screen.getByRole("heading", { level: 2, name: /About HeadStart/i });
    expect(heading).toBeInTheDocument();

    // Verify the purple highlight exists specifically inside that heading
    const brandName = within(heading).getByText(/HeadStart/i);
    expect(brandName).toBeInTheDocument();
    expect(brandName).toHaveClass("text-brand-purple-1000");
  });

  it("renders the introductory paragraph with bolded credentials", () => {
    render(<About />);
    // Using a more specific matcher to find the paragraph containing the credentials
    const credentials = screen.getByText(/a GOLD Approved Learning Partner, Approved Employer/i);

    expect(credentials).toBeInTheDocument();
    expect(credentials.tagName).toBe("B");
  });

  it("renders the Mission section with correct styling", () => {
    render(<About />);
    const missionHeading = screen.getByRole("heading", { name: /Our Mission/i });
    const missionText = screen.getByText(/Mission of HeadStart is to provide assurance/i);

    expect(missionHeading).toBeInTheDocument();
    expect(missionHeading).toHaveClass("text-brand-purple-1000");
    expect(missionText).toBeInTheDocument();
  });

  it("renders the Vision section with correct styling", () => {
    render(<About />);
    const visionHeading = screen.getByRole("heading", { name: /Our Vision/i });
    const visionText = screen.getByText(/Vision of HeadStart is to be a Centre of Excellence/i);

    expect(visionHeading).toBeInTheDocument();
    expect(visionText).toBeInTheDocument();
    // Vision section container has the gold border
    expect(visionHeading.parentElement).toHaveClass("border-brand-gold-1000");
  });

  it("renders the mission visual placeholder", () => {
    render(<About />);
    const placeholder = screen.getByText(/Mission Visual Placeholder/i);
    
    expect(placeholder).toBeInTheDocument();
    expect(placeholder).toHaveClass("text-brand-purple-400");
    expect(placeholder.parentElement).toHaveClass("bg-brand-grey-1000");
  });
});