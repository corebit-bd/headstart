import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import WhyHeadStart from "../WhyHeadStart";

describe("WhyHeadStart Component", () => {
  it("renders the Main Heading with Highlighted Brand Name", () => {
    render(<WhyHeadStart />);
    
    // Using a more flexible regex to catch variations in whitespace serialization
    const heading = screen.getByRole("heading", { level: 2, name: /Why Choose\s*HeadStart\s*\?/i });
    expect(heading).toBeInTheDocument();

    // Verify the purple highlight exists specifically inside that heading
    const brandName = within(heading).getByText("HeadStart");
    expect(brandName).toBeInTheDocument();
    expect(brandName).toHaveClass("text-brand-purple-1000");
  });

  it("renders the introductory paragraph describing the approach", () => {
    render(<WhyHeadStart />);
    
    const paragraph = screen.getByText(/At HeadStart, we go beyond traditional tuition/i);
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveClass("font-body text-lg text-black-600");
  });

  it("renders the Key Points section heading", () => {
    render(<WhyHeadStart />);
    
    const sectionHeading = screen.getByRole("heading", { level: 3, name: /Key Points/i });
    expect(sectionHeading).toBeInTheDocument();
    expect(sectionHeading).toHaveClass("border-l-4 border-brand-purple-1000 text-brand-purple-1000");
  });

  it("renders all 5 list items with correct numbers, content, and badges", () => {
    render(<WhyHeadStart />);

    const keyPoints = [
      { id: "01", title: "Academic + Advisory approach", badge: "Dual model" },
      { id: "02", title: "Result-driven teaching", badge: "94% pass rate" },
      { id: "03", title: "Expert faculty", badge: "120+ tutors" },
      { id: "04", title: "Personalized mentorship", badge: "1-on-1 support" },
      { id: "05", title: "Career-focused development", badge: "Job-ready" },
    ];

    keyPoints.forEach((point) => {
      // Verify number identifier exists
      expect(screen.getByText(point.id)).toBeInTheDocument();
      
      // Verify point title exists
      expect(screen.getByText(point.title)).toBeInTheDocument();
      
      // Verify point badge exists
      expect(screen.getByText(point.badge)).toBeInTheDocument();
    });
  });

  it("renders the mission visual placeholder with proper styling", () => {
    render(<WhyHeadStart />);
    
    const placeholder = screen.getByText(/Mission Visual Placeholder/i);
    expect(placeholder).toBeInTheDocument();
    expect(placeholder).toHaveClass("font-heading text-brand-purple-400 font-bold");
    
    // Check that the parent wrapper container has the expected style definitions
    expect(placeholder.parentElement).toHaveClass("bg-brand-grey-1000 aspect-video");
  });
});