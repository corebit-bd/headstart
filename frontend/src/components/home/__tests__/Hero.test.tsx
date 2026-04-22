import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Hero from "../Hero";

// Mock "next/link" to ensure it renders as a Standard Anchor for Testing
jest.mock("next/link", () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
});

describe("Hero Component", () => {
  it("renders the primary tagline badge", () => {
    render(<Hero />);
    const tagline = screen.getByText(/Professional Accountacy Services/i);
    expect(tagline).toBeInTheDocument();
    expect(tagline).toHaveClass("bg-brand-purple-50");
  });

  it("renders the main heading and highlighted text", () => {
    render(<Hero />);
    expect(screen.getByText(/Empowering Future/i)).toBeInTheDocument();
    expect(screen.getByText(/ACCA Leaders/i)).toBeInTheDocument();
    expect(screen.getByText(/ACCA Leaders/i)).toHaveClass(
      "text-brand-purple-1000",
    );
  });

  it("renders the descriptive text containing partner statuses", () => {
    render(<Hero />);
    const description = screen.getByText(/ACCA Approved Learning Partner/i);
    expect(description).toBeInTheDocument();
  });

  it("renders the call-to-action buttons with correct links", () => {
    render(<Hero />);

    const enrollLink = screen.getByRole("link", {
      name: /Start Your Journey/i,
    });
    const servicesLink = screen.getByRole("link", {
      name: /Explore Services/i,
    });

    expect(enrollLink).toBeInTheDocument();
    expect(enrollLink).toHaveAttribute("href", "/enroll");

    expect(servicesLink).toBeInTheDocument();
    expect(servicesLink).toHaveAttribute("href", "/services");
  });

  it("renders the quick stats indicators", () => {
    render(<Hero />);

    // Fix: Using getAllByText and checking the one with the specific styling
    // or targeting the specific stat group.
    const learningPartnerStats = screen.getAllByText(/Learning Partner/i);

    // The stat label is the one with the uppercase/tracking classes
    const statLabel = learningPartnerStats.find((el) =>
      el.className.includes("uppercase"),
    );

    expect(screen.getByText("GOLD")).toBeInTheDocument();
    expect(statLabel).toBeInTheDocument();
    expect(statLabel).toHaveTextContent(/Learning Partner/i);

    // Check for Integrity Score stat
    expect(screen.getByText("99%")).toBeInTheDocument();
    expect(screen.getByText(/Integrity Score/i)).toBeInTheDocument();
  });

  it("renders the visual placeholder element", () => {
    render(<Hero />);
    const placeholderText = screen.getByText(/HeadStart Placeholder Image/i);
    expect(placeholderText).toBeInTheDocument();
  });
});
