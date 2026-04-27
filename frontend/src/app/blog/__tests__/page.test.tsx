import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BlogHub from "../page";

describe("BlogHub Component", () => {
  it("renders the Header Section with correct Branding & Content", () => {
    render(<BlogHub />);

    // Check Main Heading - Validates the Split Text Structure
    const heading = screen.getByRole("heading", { name: /HeadStart Journal/i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("font-heading", "text-5xl", "font-bold");

    // Check for the Descriptive Text
    expect(
      screen.getByText(
        /Explore insights, achievements, and updates from across our Academic and Advisory wings/i,
      ),
    ).toBeInTheDocument();
  });

  it("renders All 5 Blog Categories defined in the Component", () => {
    render(<BlogHub />);

    const categories = [
      "ACCA Champs",
      "Success Stories",
      "Students' Voice",
      "Events",
      "New Joiners",
    ];

    categories.forEach((title) => {
      expect(
        screen.getByRole("heading", { name: title, level: 3 }),
      ).toBeInTheDocument();
    });
  });

  it("applies correct individual Branding Colors & styles to Category Cards", () => {
    render(<BlogHub />);

    // Check ACCA Champs Gold Branding
    const accaCategory = screen.getByText("ACCA Champs").closest("a");
    const accaDecorativeCircle = accaCategory?.querySelector("div");
    expect(accaDecorativeCircle).toHaveStyle({
      backgroundColor: "var(--color-brand-gold-100)",
    });

    // Check New Joiners Grey Branding
    const joinersCategory = screen.getByText("New Joiners").closest("a");
    const joinersDecorativeCircle = joinersCategory?.querySelector("div");
    expect(joinersDecorativeCircle).toHaveStyle({
      backgroundColor: "var(--color-brand-grey-1000)",
    });

    // Validate Global Hover / Transition Classes applied to All Links
    expect(accaCategory).toHaveClass(
      "group",
      "rounded-3xl",
      "border-brand-grey-1000",
      "transition-all",
    );
  });

  it("renders 'Explore Section' CTA for every Category", () => {
    render(<BlogHub />);

    // There should be exactly 5 "Explore Section" Links / Indicators
    const exploreLinks = screen.getAllByText(/Explore Section/i);
    expect(exploreLinks.length).toBe(5);

    exploreLinks.forEach((link) => {
      expect(link).toHaveClass("font-heading", "text-sm", "font-bold");
    });
  });

  it("verifies the Links have the correct href Attributes", () => {
    render(<BlogHub />);

    expect(screen.getByRole("link", { name: /ACCA Champs/i })).toHaveAttribute(
      "href",
      "/blog/acca-champs",
    );
    expect(screen.getByRole("link", { name: /Events/i })).toHaveAttribute(
      "href",
      "/blog/events",
    );
  });
});
