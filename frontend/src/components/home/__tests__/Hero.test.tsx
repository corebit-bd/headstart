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
  it("renders the main heading and highlighted text", () => {
    render(<Hero />);
    
    // Check for main heading structure
    expect(screen.getByText(/The Future of/i)).toBeInTheDocument();
    
    const accaText = screen.getByText("ACCA");
    expect(accaText).toBeInTheDocument();
    expect(accaText).toHaveClass("text-error-1000");

    const subHeading = screen.getByText(/In Bangladesh Starts Here/i);
    expect(subHeading).toBeInTheDocument();
    expect(subHeading).toHaveClass("text-brand-purple-1000");
  });

  it("renders the descriptive text containing partner statuses", () => {
    render(<Hero />);
    const description = screen.getByText(/HeadStart is an ACCA Approved Learning Partner/i);
    expect(description).toBeInTheDocument();
  });

  it("renders the call-to-action buttons with correct links", () => {
    render(<Hero />);

    // Query elements by their precise accessible names
    const applyLink = screen.getByRole("link", { name: /Apply Now/i });
    const consultLink = screen.getByRole("link", { name: /Book Free Consultation/i });
    // const whatsappLink = screen.getByRole("link", { name: /Chat on WhatsApp/i });

    expect(applyLink).toBeInTheDocument();
    expect(applyLink).toHaveAttribute("href", "/enroll");

    expect(consultLink).toBeInTheDocument();
    expect(consultLink).toHaveAttribute("href", "/services");

    // expect(whatsappLink).toBeInTheDocument();
    // expect(whatsappLink).toHaveAttribute("href", "/services");
  });

  it("renders the quick stats indicators", () => {
    render(<Hero />);

    // Verify stats figures are present
    expect(screen.getByText("94%")).toBeInTheDocument();
    expect(screen.getByText("120+")).toBeInTheDocument();
    expect(screen.getByText("3500+")).toBeInTheDocument();
    expect(screen.getByText("12+")).toBeInTheDocument();

    // Verify stats labels are present
    expect(screen.getByText(/Exam pass rate/i)).toBeInTheDocument();
    expect(screen.getByText(/ACCA qualified mentors/i)).toBeInTheDocument();
    expect(screen.getByText(/Students enrolled/i)).toBeInTheDocument();
    expect(screen.getByText(/Years of excellence/i)).toBeInTheDocument();
  });

  it("renders the visual placeholder element", () => {
    render(<Hero />);
    const placeholderText = screen.getByText(/HeadStart Placeholder Image/i);
    expect(placeholderText).toBeInTheDocument();
  });
});