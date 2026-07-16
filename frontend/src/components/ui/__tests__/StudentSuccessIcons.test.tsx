import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import {
  AwardIcon,
  CalendarIcon,
  CheckCircleIcon,
  TrendingUpIcon,
  UserIcon,
} from "../StudentSuccessIcons";

const icons = [
  { name: "AwardIcon", Component: AwardIcon },
  { name: "CheckCircleIcon", Component: CheckCircleIcon },
  { name: "TrendingUpIcon", Component: TrendingUpIcon },
  { name: "CalendarIcon", Component: CalendarIcon },
  { name: "UserIcon", Component: UserIcon },
] as const;

describe("StudentSuccessIcons", () => {
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
    it("passes additional svg props to AwardIcon", () => {
      const { container } = render(
        <AwardIcon className="text-brand-purple-1000" aria-hidden="true" />,
      );
      const svg = container.querySelector("svg");

      expect(svg).toHaveClass("text-brand-purple-1000");
      expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    it("passes additional svg props to UserIcon", () => {
      const { container } = render(
        <UserIcon className="text-brand-purple-1000" data-testid="user-icon" />,
      );
      const svg = container.querySelector("svg");

      expect(svg).toHaveClass("text-brand-purple-1000");
      expect(svg).toHaveAttribute("data-testid", "user-icon");
    });
  });
});
