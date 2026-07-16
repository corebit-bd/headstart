import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Contact } from "../Contact"; // Adjust the relative path as needed

describe("Contact Component", () => {
  it("renders the section heading correctly", () => {
    render(<Contact />);

    // Note: Heading contains text with a <span> so matching with regex makes it robust
    const heading = screen.getByRole("heading", {
      level: 2,
      name: /Start Your ACCA Journey Today/i,
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass(
      "font-heading",
      "text-3xl",
      "font-bold",
      "text-black-900",
      "mb-4"
    );
  });

  it("renders the section description text", () => {
    render(<Contact />);

    const description = screen.getByText(
      /Join HeadStart and take the first step toward becoming a globally recognized finance professional/i
    );
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass(
      "text-base",
      "md:text-lg",
      "max-w-2xl",
      "mx-auto",
      "mb-12",
      "text-black-800",
      "leading-relaxed"
    );
  });

  it("applies the correct layout and background classes to the section wrapper", () => {
    const { container } = render(<Contact />);
    const section = container.querySelector("section");

    expect(section).toBeInTheDocument();
    expect(section).toHaveClass("bg-brand-grey-50", "py-24");
  });

  it("renders the navigation links with correct labels, routes, and styling", () => {
    render(<Contact />);

    // Verify the Apply Now / Enrollment link
    const applyLink = screen.getByRole("link", { name: /Apply Now/i });
    expect(applyLink).toBeInTheDocument();
    expect(applyLink).toHaveAttribute("href", "/enroll");
    expect(applyLink).toHaveClass(
      "rounded-md",
      "bg-brand-gold-1000",
      "px-8",
      "py-4",
      "font-heading",
      "text-base",
      "text-center",
      "font-bold",
      "text-black-900",
      "shadow-lg",
      "hover:bg-brand-gold-900",
      "hover:scale-105",
      "transition-all"
    );

    // Verify the WhatsApp Consultation link
    const whatsappLink = screen.getByRole("link", { name: /Book Free Consultation/i });
    expect(whatsappLink).toBeInTheDocument();
    expect(whatsappLink).toHaveAttribute("href", "https://wa.me/8801886091323");
    expect(whatsappLink).toHaveAttribute("target", "_blank");
    expect(whatsappLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(whatsappLink).toHaveClass(
      "rounded-md",
      "border-2",
      "border-brand-purple-1000",
      "px-8",
      "py-4",
      "font-heading",
      "text-base",
      "text-center",
      "font-bold",
      "text-brand-purple-1000",
      "hover:bg-brand-purple-1000",
      "hover:text-brand-gold-50",
      "transition-all"
    );
  });
});