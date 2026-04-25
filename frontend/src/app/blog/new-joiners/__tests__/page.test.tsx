import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NewJoiners from "../page";

describe("NewJoiners Component", () => {
  it("renders the Header Section with correct Branding & Content", () => {
    render(<NewJoiners />);

    // Check Main Heading
    const heading = screen.getByRole("heading", { name: /New Joiners/i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass(
      "font-heading",
      "text-4xl",
      "text-brand-purple-1000",
    );

    // Check for the "Dual-Wing" Descriptive Text
    expect(
      screen.getByText(
        /Welcoming the newest members to our Dual-Wing platform/i,
      ),
    ).toBeInTheDocument();
  });

  it("renders the correct number of Joiner Cards", () => {
    render(<NewJoiners />);

    // Based on the HardCoded Joiners Array in page.tsx (Sarah, Tanvir, Elena)
    const joinerNames = ["Sarah Chen", "Tanvir Ahmed", "Elena Rodriguez"];

    joinerNames.forEach((name) => {
      expect(
        screen.getByRole("heading", { name, level: 3 }),
      ).toBeInTheDocument();
    });
  });

  it("applies the Correct Wing Labels & Styling to the Cards", () => {
    render(<NewJoiners />);

    // Verify Wing labels exist (Academy & Advisory)
    const academyWing = screen.getByText(/Academy Wing/i);
    const advisoryWings = screen.getAllByText(/Advisory Wing/i);

    expect(academyWing).toBeInTheDocument();
    expect(advisoryWings.length).toBe(2);

    // Validate Branding Classes on the Badge
    expect(academyWing).toHaveClass(
      "bg-brand-purple-50",
      "text-brand-purple-900",
    );
  });

  it("renders Profile Placeholders with the correct Initial & Colors", () => {
    render(<NewJoiners />);

    // Check for "Sarah Chen" -> "S"
    const sarahInitial = screen.getByText("S");
    expect(sarahInitial).toBeInTheDocument();

    // Check Container of the Initial for Branding Colors
    const initialContainer = sarahInitial.parentElement;
    expect(initialContainer).toHaveClass("bg-brand-purple-100");
  });

  it("renders the Culture CTA Section with correct Branding", () => {
    render(<NewJoiners />);

    // Check CTA Heading
    expect(screen.getByText(/Join the Excellence/i)).toBeInTheDocument();

    // Verify the "View Careers" Button & its Gold Branding
    const careersButton = screen.getByRole("button", { name: /View Careers/i });
    expect(careersButton).toBeInTheDocument();
    expect(careersButton).toHaveClass("bg-brand-gold-1000", "text-black-900");

    // Verify the Background of the CTA Container
    const ctaSection = screen.getByText(/Join the Excellence/i).closest("div");
    expect(ctaSection).toHaveClass("bg-brand-purple-1000");
  });
});
