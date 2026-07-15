import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BriefcaseIcon, BookOpenIcon, LightBulbIcon } from "../StudentSupportIcons";

describe("Student Support Icons Kit", () => {
  const commonAttributesAssert = (container: HTMLElement) => {
    const svgElement = container.querySelector("svg");
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute("fill", "none");
    expect(svgElement).toHaveAttribute("viewBox", "0 0 24 24");
    expect(svgElement).toHaveAttribute("stroke-width", "1.5");
    expect(svgElement).toHaveAttribute("stroke", "currentColor");
  };

  describe("BriefcaseIcon", () => {
    it("renders with correct base attributes", () => {
      const { container } = render(<BriefcaseIcon />);
      commonAttributesAssert(container);
    });

    it("accepts and applies custom className", () => {
      const { container } = render(<BriefcaseIcon className="h-10 w-10 text-brand-purple-1000" />);
      const svgElement = container.querySelector("svg");
      expect(svgElement).toHaveClass("h-10 w-10", "text-brand-purple-1000");
    });

    it("passes through miscellaneous HTML attributes", () => {
      const { container } = render(<BriefcaseIcon data-testid="briefcase" strokeWidth={2} />);
      const svgElement = container.querySelector("svg");
      expect(svgElement).toHaveAttribute("data-testid", "briefcase");
      expect(svgElement).toHaveAttribute("stroke-width", "2");
    });
  });

  describe("BookOpenIcon", () => {
    it("renders with correct base attributes", () => {
      const { container } = render(<BookOpenIcon />);
      commonAttributesAssert(container);
    });

    it("accepts and applies custom className", () => {
      const { container } = render(<BookOpenIcon className="h-6 w-6 text-brand-gold-1000" />);
      const svgElement = container.querySelector("svg");
      expect(svgElement).toHaveClass("h-6 w-6", "text-brand-gold-1000");
    });

    it("passes through miscellaneous HTML attributes", () => {
      const { container } = render(<BookOpenIcon aria-hidden="true" data-testid="book" />);
      const svgElement = container.querySelector("svg");
      expect(svgElement).toHaveAttribute("aria-hidden", "true");
      expect(svgElement).toHaveAttribute("data-testid", "book");
    });
  });

  describe("LightBulbIcon", () => {
    it("renders with correct base attributes", () => {
      const { container } = render(<LightBulbIcon />);
      commonAttributesAssert(container);
    });

    it("accepts and applies custom className", () => {
      const { container } = render(<LightBulbIcon className="h-12 w-12 text-black-900" />);
      const svgElement = container.querySelector("svg");
      expect(svgElement).toHaveClass("h-12 w-12", "text-black-900");
    });

    it("passes through miscellaneous HTML attributes", () => {
      const { container } = render(<LightBulbIcon id="my-bulb-icon" strokeWidth={1} />);
      const svgElement = container.querySelector("svg");
      expect(svgElement).toHaveAttribute("id", "my-bulb-icon");
      expect(svgElement).toHaveAttribute("stroke-width", "1");
    });
  });
});