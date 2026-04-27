import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SuccessStories from "../page";

describe("SuccessStories Component", () => {
  it("renders the Header Section with correct Branding & Content", () => {
    render(<SuccessStories />);

    // Check Main Heading
    const heading = screen.getByRole("heading", { name: /Success Stories/i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass(
      "font-heading",
      "text-4xl",
      "font-bold",
      "text-black-900",
    );

    // Check Background Wrapper
    const wrapper = heading.closest("div")?.parentElement;
    expect(wrapper).toHaveClass("bg-brand-grey-50", "min-h-screen");
  });

  it("renders the correct number of Story Cards", () => {
    render(<SuccessStories />);

    // Based on the [1, 2].map Logic in page.tsx
    const storyHeadings = screen.getAllByRole("heading", {
      name: /From Student to Senior Auditor/i,
      level: 3,
    });
    expect(storyHeadings).toHaveLength(2);
  });

  it("applies the Correct Career Labels & Styling to the Cards", () => {
    render(<SuccessStories />);

    // Verify Career Milestone labels exist
    const labels = screen.getAllByText(/Career Milestone/i);
    expect(labels).toHaveLength(2);

    // Validate Branding Classes (uppercase, tracking, success color)
    labels.forEach((label) => {
      expect(label).toHaveClass(
        "text-success-1000",
        "font-heading",
        "text-xs",
        "uppercase",
        "tracking-widest",
      );
    });
  });

  it("renders Story Visuals with correct Placeholders & Colors", () => {
    render(<SuccessStories />);

    const visuals = screen.getAllByText(/Story Visual/i);
    expect(visuals).toHaveLength(2);

    visuals.forEach((visual) => {
      expect(visual).toHaveClass(
        "font-heading",
        "text-success-1000",
        "font-bold",
      );

      const container = visual.parentElement;
      expect(container).toHaveClass(
        "aspect-video",
        "bg-success-50",
        "rounded-xl",
      );
    });
  });

  it("renders the 'Read Full Story' Buttons with Brand Purple Styling", () => {
    render(<SuccessStories />);

    const buttons = screen.getAllByRole("button", {
      name: /Read Full Story →/i,
    });
    expect(buttons).toHaveLength(2);

    buttons.forEach((button) => {
      expect(button).toHaveClass(
        "text-brand-purple-1000",
        "font-heading",
        "font-bold",
        "text-sm",
      );
    });
  });

  it("verifies the Responsive Card Container Styling", () => {
    render(<SuccessStories />);

    // Find the Card Container (Parent of the Visual Span's Container)
    const firstVisual = screen.getAllByText(/Story Visual/i)[0];
    const cardContainer = firstVisual.parentElement?.parentElement;

    expect(cardContainer).toHaveClass(
      "flex",
      "flex-col",
      "md:flex-row",
      "bg-white",
      "rounded-3xl",
      "border-brand-grey-1000",
    );
  });
});
