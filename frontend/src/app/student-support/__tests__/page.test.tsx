import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, within } from "@testing-library/react";
import StudentSupportPage from "../page";

// Mock Next.js Link component with strict TS types
jest.mock("next/link", () => {
  return ({ children, href, ...props }: React.ComponentPropsWithoutRef<"a">) => {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  };
});

describe("StudentSupportPage Component", () => {
  const WHATSAPP_URL = "https://wa.me/8801886091323";

  // Helper helper function to assert all three CTAs are present and correctly configured
  const assertActionButtonsExist = (container: HTMLElement) => {
    const applyBtn = within(container).getByRole("link", { name: /Apply Now/i });
    const consultBtn = within(container).getByRole("link", { name: /Book Free Consultation/i });
    const contactBtn = within(container).getByRole("link", { name: /Contact Us/i });

    // Apply Now Link
    expect(applyBtn).toBeInTheDocument();
    expect(applyBtn).toHaveAttribute("href", "/enroll");

    // WhatsApp Link
    expect(consultBtn).toBeInTheDocument();
    expect(consultBtn).toHaveAttribute("href", WHATSAPP_URL);
    expect(consultBtn).toHaveAttribute("target", "_blank");
    expect(consultBtn).toHaveAttribute("rel", "noopener noreferrer");

    // Contact Us Link
    expect(contactBtn).toBeInTheDocument();
    expect(contactBtn).toHaveAttribute("href", "/contact-us");
    expect(contactBtn).toHaveAttribute("target", "_blank");
    expect(contactBtn).toHaveAttribute("rel", "noopener noreferrer");
  };

  it("renders the modernized illustration hero section with accurate copy", () => {
    render(<StudentSupportPage />);

    const mainHeader = screen.getByRole("heading", { name: "Student Support", level: 1 });
    expect(mainHeader).toBeInTheDocument();

    expect(
      screen.getByText("Comprehensive support designed to guide students through their ACCA journey—from learning to career success.")
    ).toBeInTheDocument();

    expect(
      screen.getByText(/At HeadStart, student support continues beyond the classroom/i)
    ).toBeInTheDocument();

    // Verify background layout structural classes remain compatible with illustrations
    const heroSection = mainHeader.closest("section");
    expect(heroSection).toHaveClass("relative", "overflow-hidden");
  });

  it("renders the 3 primary configuration tabs", () => {
    render(<StudentSupportPage />);

    expect(screen.getByRole("button", { name: /Career Support/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Academic Resources/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Knowledge Hub/i })).toBeInTheDocument();
  });

  it("displays Career Support by default with all three action links", () => {
    const { container } = render(<StudentSupportPage />);

    expect(
      screen.getByRole("heading", { name: "Career Support & Job Placement", level: 3 })
    ).toBeInTheDocument();

    expect(screen.getByText("Guidance & Mentoring")).toBeInTheDocument();
    expect(screen.getByText("CV & Profile Building")).toBeInTheDocument();

    assertActionButtonsExist(container);
  });

  it("switches context dynamically to Academic Resources on tab selection", () => {
    const { container } = render(<StudentSupportPage />);

    const academicTab = screen.getByRole("button", { name: /Academic Resources/i });
    fireEvent.click(academicTab);

    expect(
      screen.getByRole("heading", { name: "Academic Resources", level: 3 })
    ).toBeInTheDocument();

    expect(screen.getByText("Study Materials")).toBeInTheDocument();
    expect(screen.getByText("Recorded Sessions")).toBeInTheDocument();

    assertActionButtonsExist(container);
  });

  it("switches context dynamically to Knowledge Hub on tab selection", () => {
    const { container } = render(<StudentSupportPage />);

    const hubTab = screen.getByRole("button", { name: /Knowledge Hub/i });
    fireEvent.click(hubTab);

    expect(
      screen.getByRole("heading", { name: "Blogs & Insights", level: 3 })
    ).toBeInTheDocument();

    expect(screen.getByText("ACCA Study Tips & Strategies")).toBeInTheDocument();
    expect(screen.getByText("Student Success Stories")).toBeInTheDocument();

    assertActionButtonsExist(container);
  });
});