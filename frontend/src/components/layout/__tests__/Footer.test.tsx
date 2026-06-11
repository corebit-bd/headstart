import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer"; // Adjusted path to match your directory structure

// Mock "next/link" to ensure it renders as a Standard Anchor for Testing
jest.mock("next/link", () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
});

describe("Footer Component", () => {
  it("renders the Brand Name 'HeadStart' as a Home Link", () => {
    render(<Footer />);
    // Target the specific instance of HeadStart that is a link to the homepage
    const logoLink = screen.getByRole("link", { name: /^HeadStart$/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute("href", "/");
  });

  it("renders the Main Navigation Section Headings", () => {
    render(<Footer />);
    expect(screen.getByText("Academy")).toBeInTheDocument();
    expect(screen.getByText("Advisory")).toBeInTheDocument();
    expect(screen.getByText("Resources")).toBeInTheDocument();
  });

  it("renders the correct Navigation Links within Sections", () => {
    render(<Footer />);

    // Academy Links
    expect(screen.getByText("ACCA Courses")).toBeInTheDocument();
    expect(screen.getByText("SDC")).toBeInTheDocument();

    // Advisory Links
    expect(screen.getByText("Professional Advisory")).toBeInTheDocument();
    expect(screen.getByText("Corporate Training")).toBeInTheDocument();

    // Resources Links
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
  });

  it("displays the Dynamic Current Year & Copyright Notice", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear().toString();
    // Using a more specific Matcher for the Copyright Paragraph to avoid Collision with the Logo
    expect(
      screen.getByText(new RegExp(`© ${currentYear} HeadStart`, "i")),
    ).toBeInTheDocument();
  });

  it("renders the Developer Credit for 'CoreBit'", () => {
    render(<Footer />);
    const credit = screen.getByText(/Developed By/i);
    const developer = screen.getByText("CoreBit");

    expect(credit).toBeInTheDocument();
    expect(developer).toBeInTheDocument();
    expect(developer).toHaveClass("text-brand-purple-700");
  });

  it("displays the ACCA Gold Partner Status Description", () => {
    render(<Footer />);
    const partnerText = screen.getByText(/A GOLD Approved Learning Partner/i);
    expect(partnerText).toBeInTheDocument();
  });
});
