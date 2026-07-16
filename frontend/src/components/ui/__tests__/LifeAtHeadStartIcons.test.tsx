// frontend/src/components/ui/__tests__/LifeAtHeadStartIcons.test.tsx
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { TrophyIcon, CalendarIcon } from "../LifeAtHeadStartIcons";

describe("LifeAtHeadStartIcons Components", () => {
  describe("TrophyIcon", () => {
    it("renders the SVG element without crashing", () => {
      render(<TrophyIcon data-testid="trophy-icon" />);
      
      const svgElement = screen.getByTestId("trophy-icon");
      expect(svgElement).toBeInTheDocument();
      expect(svgElement.tagName.toLowerCase()).toBe("svg");
    });

    it("correctly forwards the className and other SVG properties", () => {
      render(
        <TrophyIcon 
          data-testid="trophy-icon" 
          className="h-6 w-6 text-brand-purple-1000" 
          strokeWidth={2}
        />
      );

      const svgElement = screen.getByTestId("trophy-icon");
      expect(svgElement).toHaveClass("h-6 w-6", "text-brand-purple-1000");
      expect(svgElement).toHaveAttribute("stroke-width", "2");
    });
  });

  describe("CalendarIcon", () => {
    it("renders the SVG element without crashing", () => {
      render(<CalendarIcon data-testid="calendar-icon" />);
      
      const svgElement = screen.getByTestId("calendar-icon");
      expect(svgElement).toBeInTheDocument();
      expect(svgElement.tagName.toLowerCase()).toBe("svg");
    });

    it("correctly forwards the className and other SVG properties", () => {
      render(
        <CalendarIcon 
          data-testid="calendar-icon" 
          className="h-5 w-5 text-black-500" 
          strokeWidth={2}
        />
      );

      const svgElement = screen.getByTestId("calendar-icon");
      expect(svgElement).toHaveClass("h-5 w-5", "text-black-500");
      expect(svgElement).toHaveAttribute("stroke-width", "2");
    });
  });
});