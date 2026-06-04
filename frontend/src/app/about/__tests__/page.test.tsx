import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import AboutPage from "../page";

describe("AboutPage Component", () => {
  it("renders the Hero Section with correct Branding & Heading", () => {
    render(<AboutPage />);

    // Check main heading matching your page's text exactly
    const heading = screen.getByRole("heading", { name: /About HeadStart/i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("font-heading", "text-5xl", "font-bold");

    // Check Hero Container Branding
    const heroSection = heading.closest("section");
    expect(heroSection).toHaveClass("bg-brand-purple-1000", "py-24");
  });

  it("renders all Tab trigger buttons in the container", () => {
    render(<AboutPage />);

    // Check for the tab headers matching the implemented aboutTabs array
    expect(screen.getByRole("button", { name: /Introduction/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Mission & Vision/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Our Faculty/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /National Prize-Winners/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Our Alumni/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Accreditations/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Our Partnerships/i })).toBeInTheDocument();
  });

  it("contains the correct Foundational Text about HeadStart's History inside the default tab", () => {
    render(<AboutPage />);

    // Verify initial layout content snippets that are visible by default
    expect(
      screen.getByText(/founded in 2020 by renowned FCCA/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/a GOLD Approved Learning Partner, Approved Employer/i)
    ).toBeInTheDocument();
  });

  it("switches content to display the Mission & Vision Section when its tab is clicked", () => {
    render(<AboutPage />);

    // Click the Mission & Vision Tab button to mount the contents
    const tabButton = screen.getByRole("button", { name: /Mission & Vision/i });
    fireEvent.click(tabButton);

    // Verify structural headings inside the active content view block
    expect(screen.getByRole("heading", { name: /Our Mission/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Our Vision/i, level: 3 })).toBeInTheDocument();

    // Verify content assertions matching text exactly
    expect(
      screen.getByText(/build the next generation of finance enthusiasts as competent/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Centre of Excellence & the flagbearer in serving Competent Professional Accountants/i)
    ).toBeInTheDocument();
  });

  it("verifies formatting border accent accents are present inside the Mission & Vision pane", () => {
    render(<AboutPage />);

    // Activate the Tab view pane
    fireEvent.click(screen.getByRole("button", { name: /Mission & Vision/i }));

    const missionHeading = screen.getByRole("heading", { name: /Our Mission/i });
    const visionHeading = screen.getByRole("heading", { name: /Our Vision/i });

    // Validate your custom left accents match implementation tokens exactly
    expect(missionHeading.parentElement).toHaveClass("border-l-4", "border-brand-purple-1000");
    expect(visionHeading.parentElement).toHaveClass("border-l-4", "border-brand-gold-500");
  });
});