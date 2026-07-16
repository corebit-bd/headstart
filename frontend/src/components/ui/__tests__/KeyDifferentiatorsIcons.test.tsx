import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as OriginalIcons from "../KeyDifferentiatorsIcons";

interface TestIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const IntegrationIcon = OriginalIcons.IntegrationIcon as React.ComponentType<TestIconProps>;
const ResultIcon = OriginalIcons.ResultIcon as React.ComponentType<TestIconProps>;
const FacultyIcon = OriginalIcons.FacultyIcon as React.ComponentType<TestIconProps>;
const MentorshipIcon = OriginalIcons.MentorshipIcon as React.ComponentType<TestIconProps>;
const CareerIcon = OriginalIcons.CareerIcon as React.ComponentType<TestIconProps>;
const SupportIcon = OriginalIcons.SupportIcon as React.ComponentType<TestIconProps>;

const icons = [
  { name: "IntegrationIcon", Component: IntegrationIcon },
  { name: "ResultIcon", Component: ResultIcon },
  { name: "FacultyIcon", Component: FacultyIcon },
  { name: "MentorshipIcon", Component: MentorshipIcon },
  { name: "CareerIcon", Component: CareerIcon },
  { name: "SupportIcon", Component: SupportIcon },
] as const;

describe("KeyDifferentiatorsIcons", () => {
  describe("Rendering", () => {
    it.each(icons)("renders $name as an svg element", ({ Component }) => {
      const { container } = render(<Component />);
      const svg = container.querySelector("svg");

      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
    });
  });

  describe("Default Size", () => {
    it.each(icons)("renders $name with default size of 24", ({ Component }) => {
      const { container } = render(<Component />);
      const svg = container.querySelector("svg");

      expect(svg).toHaveAttribute("width", "24");
      expect(svg).toHaveAttribute("height", "24");
    });
  });

  describe("Custom Size", () => {
    it.each(icons)("renders $name with a custom size", ({ Component }) => {
      const { container } = render(<Component size={16} />);
      const svg = container.querySelector("svg");

      expect(svg).toHaveAttribute("width", "16");
      expect(svg).toHaveAttribute("height", "16");
    });
  });

  describe("SVG Attributes", () => {
    it.each(icons)(
      "applies stroke styling to $name",
      ({ Component }) => {
        const { container } = render(<Component />);
        const svg = container.querySelector("svg");

        expect(svg).toHaveAttribute("viewBox", "0 0 24 24");
        expect(svg).toHaveAttribute("fill", "none");
        expect(svg).toHaveAttribute("stroke", "currentColor");
      },
    );
  });

  describe("Custom Props", () => {
    it("passes additional svg props to IntegrationIcon", () => {
      const { container } = render(
        <IntegrationIcon className="text-brand-purple-1000" aria-hidden="true" />,
      );
      const svg = container.querySelector("svg");

      expect(svg).toHaveClass("text-brand-purple-1000");
      expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    it("passes additional svg props to SupportIcon", () => {
      const { container } = render(
        <SupportIcon className="text-brand-purple-1000" data-testid="support-icon" />,
      );
      const svg = container.querySelector("svg");

      expect(svg).toHaveClass("text-brand-purple-1000");
      expect(svg).toHaveAttribute("data-testid", "support-icon");
    });
  });
});