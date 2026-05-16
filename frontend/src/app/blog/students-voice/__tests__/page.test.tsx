import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import StudentsVoice from "../page";

describe("StudentsVoice Component", () => {
  it("renders the Header Section with correct Branding & Content", () => {
    render(<StudentsVoice />);

    // Check Main Heading
    const heading = screen.getByRole("heading", { name: /Students' Voice/i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass(
      "font-heading",
      "text-4xl",
      "font-bold",
      "text-brand-purple-1000",
    );
  });

  it("renders the correct number of Testimonial Cards", () => {
    render(<StudentsVoice />);

    // Based on the [1, 2, 3].map loop in page.tsx
    const testimonials = screen.getAllByText(
      /HeadStart's Dual-Wing approach is unlike any other learning partner/i,
    );
    expect(testimonials).toHaveLength(3);
  });

  it("applies the Correct Styling & Decorative Elements to the Cards", () => {
    render(<StudentsVoice />);

    // Check for the Decorative Quotation Marks
    const quoteIcons = screen.getAllByText("“");
    expect(quoteIcons).toHaveLength(3);

    expect(quoteIcons[0]).toHaveClass(
      "text-brand-purple-200",
      "font-serif",
      "text-6xl",
    );

    // Verify Card Container Styling
    const cardContainer = quoteIcons[0].closest("div");
    expect(cardContainer).toHaveClass(
      "bg-brand-grey-50",
      "border-brand-grey-1000",
      "rounded-2xl",
    );
  });

  it("renders Student Information with correct Branding", () => {
    render(<StudentsVoice />);

    // Check for Student Name
    const studentNames = screen.getAllByText(/Aisha Rahaman/i);
    expect(studentNames).toHaveLength(3);
    expect(studentNames[0]).toHaveClass(
      "font-heading",
      "text-sm",
      "font-bold",
      "text-black-900",
    );

    // Check for Student Role / Level
    const studentRoles = screen.getAllByText(/ACCA Skills Level Student/i);
    expect(studentRoles).toHaveLength(3);
    expect(studentRoles[0]).toHaveClass(
      "font-body",
      "text-xs",
      "text-brand-purple-600",
    );
  });

  it("renders the Testimonial Text with correct Typography", () => {
    render(<StudentsVoice />);

    const testimonialText = screen.getAllByText(
      /The advisory focus made complex data feel simple/i,
    );

    expect(testimonialText[0]).toHaveClass(
      "font-body",
      "text-black-600",
      "italic",
      "text-lg",
    );
  });
});
