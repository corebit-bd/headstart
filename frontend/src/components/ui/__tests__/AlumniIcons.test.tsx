import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import * as AlumniIcons from "../AlumniIcons";

// Group 1: Functional UI SVGs
const functionalIcons = [
  { name: "QuoteIcon", Component: AlumniIcons.QuoteIcon },
  { name: "TrendUpIcon", Component: AlumniIcons.TrendUpIcon },
  { name: "CheckIcon", Component: AlumniIcons.CheckIcon },
] as const;

// Group 2: Corporate Brand SVGs (Static dimensions, custom viewboxes)
const corporateLogos = [
  { name: "DeloitteLogo", Component: AlumniIcons.DeloitteLogo, expectedViewBox: "0 0 92 20" },
  { name: "PwCLogo", Component: AlumniIcons.PwCLogo, expectedViewBox: "0 0 45 32" },
  { name: "EYLogo", Component: AlumniIcons.EYLogo, expectedViewBox: "0 0 32 24" },
  { name: "KPMGLogo", Component: AlumniIcons.KPMGLogo, expectedViewBox: "0 0 68 20" },
] as const;

describe("AlumniIcons Component Suite", () => {
  
  describe("Functional Icons Rendering", () => {
    it.each(functionalIcons)("renders $name as a valid svg element", ({ Component }) => {
      const { container } = render(<Component />);
      const svg = container.querySelector("svg");
      expect(svg).toBeInTheDocument();
    });

    it("applies accurate design system classes to functional icons", () => {
      const { container: quoteContainer } = render(<AlumniIcons.QuoteIcon />);
      expect(quoteContainer.querySelector("svg")).toHaveClass("text-brand-purple-300");

      const { container: trendContainer } = render(<AlumniIcons.TrendUpIcon />);
      expect(trendContainer.querySelector("svg")).toHaveClass("text-success-1000");

      const { container: checkContainer } = render(<AlumniIcons.CheckIcon />);
      expect(checkContainer.querySelector("svg")).toHaveClass("text-brand-purple-1000");
    });
  });

  describe("Corporate Partner Brand Logos Rendering", () => {
    it.each(corporateLogos)(
      "renders $name with its correct static viewBox specification ($expectedViewBox)", 
      ({ Component, expectedViewBox }) => {
        const { container } = render(<Component />);
        const svg = container.querySelector("svg");
        
        expect(svg).toBeInTheDocument();
        expect(svg).toHaveAttribute("viewBox", expectedViewBox);
        expect(svg).toHaveAttribute("fill", "currentColor");
      }
    );

    it("contains the essential interior path structural trees", () => {
      const { container: deloitteContainer } = render(<AlumniIcons.DeloitteLogo />);
      expect(deloitteContainer.querySelector("circle")).toBeInTheDocument();

      const { container: eyContainer } = render(<AlumniIcons.EYLogo />);
      expect(eyContainer.querySelector("polygon")).toBeInTheDocument();
    });
  });

  describe("Layout and Wrapper Utilities", () => {
    it("renders TrackWrapper as a flex layout container housing its children", () => {
      render(
        <AlumniIcons.TrackWrapper>
          <span data-testid="child-element-1">Child 1</span>
          <span data-testid="child-element-2">Child 2</span>
        </AlumniIcons.TrackWrapper>
      );

      const child1 = screen.getByTestId("child-element-1");
      const child2 = screen.getByTestId("child-element-2");

      expect(child1).toBeInTheDocument();
      expect(child2).toBeInTheDocument();
      
      // Verifies parent layout styles are present
      expect(child1.parentElement).toHaveClass("flex", "shrink-0", "gap-8");
    });

    it("renders LogoCard wrapper with interactive hover utilities and wraps custom logos safely", () => {
        const { container } = render(
          <AlumniIcons.LogoCard>
            <AlumniIcons.DeloitteLogo />
          </AlumniIcons.LogoCard>
        );
  
        const deloitteSvg = container.querySelector("svg");
        expect(deloitteSvg).toBeInTheDocument();
  
        // Look up container by its styling traits
        const cardContainer = deloitteSvg?.parentElement;
        expect(cardContainer).toHaveClass(
          "w-48",
          "h-20",
          "bg-brand-grey-100",
          "hover:bg-brand-grey-200"
        );
      });
  });
});