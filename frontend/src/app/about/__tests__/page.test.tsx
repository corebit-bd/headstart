import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AboutPage from "../page";

describe("AboutPage Component", () => {
  it("renders the Hero Section with correct Branding & Heading", () => {
    render(<AboutPage />);

    // Check main heading
    const heading = screen.getByRole("heading", { name: /Our Story/i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("font-heading", "text-5xl");

    // Check Hero Container Branding
    const heroSection = heading.closest("section");
    expect(heroSection).toHaveClass("bg-brand-purple-1000");
  });

  it("renders the Mission & Vision Section with correct Labels", () => {
    render(<AboutPage />);

    // Check for the Rounded-Full Badge Labels
    expect(screen.getByText(/Our Mission/i)).toBeInTheDocument();
    expect(screen.getByText(/Our Vision/i)).toBeInTheDocument();

    // Check for specific Sub-Headings
    expect(
      screen.getByText(/Empowering Future Finance Leaders/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Excellence in Professional Accountancy/i),
    ).toBeInTheDocument();
  });

  it("renders both Academic & Advisory Wings in the Dual-Wing Section", () => {
    render(<AboutPage />);

    // Verify Wing Titles
    expect(
      screen.getByRole("heading", { name: /^Academic$/i, level: 3 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /^Advisory$/i, level: 3 }),
    ).toBeInTheDocument();

    // Verify Index Indicators (01 & 02)
    expect(screen.getByText("01")).toBeInTheDocument();
    expect(screen.getByText("02")).toBeInTheDocument();
  });

  it("applies the correct Background Colors to the Dual-Wing Icons", () => {
    render(<AboutPage />);

    const academicIcon = screen.getByText("01").parentElement;
    const advisoryIcon = screen.getByText("02").parentElement;

    // Validate Branding Colors based on Code
    expect(academicIcon).toHaveClass("bg-brand-purple-1000");
    expect(advisoryIcon).toHaveClass("bg-brand-gold-1000");
  });

  it("contains the correct Foundational Text about HeadStart's History", () => {
    render(<AboutPage />);

    // Verify specific Content Snippets
    expect(
      screen.getByText(/founded in 2020 by renowned FCCA/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Business Process Optimization \(BPO\)/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/OBU RAP Mentorship/i)).toBeInTheDocument();
  });
});
