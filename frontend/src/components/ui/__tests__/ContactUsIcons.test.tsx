import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  WhatsAppIcon,
} from "../ContactUsIcons";

describe("Contact Us Custom Icons Component Suite", () => {
  
  // Test 1: DOM Mounting Checks
  describe("DOM Mounting and Basic Layout Structure", () => {
    it("renders all custom SVGs in the document cleanly", () => {
      const { container: mapContainer } = render(<MapPinIcon />);
      const { container: phoneContainer } = render(<PhoneIcon />);
      const { container: envelopeContainer } = render(<EnvelopeIcon />);
      const { container: clockContainer } = render(<ClockIcon />);
      const { container: waContainer } = render(<WhatsAppIcon />);

      expect(mapContainer.querySelector("svg")).toBeInTheDocument();
      expect(phoneContainer.querySelector("svg")).toBeInTheDocument();
      expect(envelopeContainer.querySelector("svg")).toBeInTheDocument();
      expect(clockContainer.querySelector("svg")).toBeInTheDocument();
      expect(waContainer.querySelector("svg")).toBeInTheDocument();
    });
  });

  // Test 2: Dynamic Class Integration Tests
  describe("Styling Class Custom Parameters Passing Validation", () => {
    it("applies the default sizing layout classes when none are supplied", () => {
      const { container } = render(<MapPinIcon />);
      const svgElement = container.querySelector("svg");
      expect(svgElement).toHaveClass("w-6");
      expect(svgElement).toHaveClass("h-6");
    });

    it("applies custom design system design tokens cleanly when requested", () => {
      const testClass = "w-12 h-12 text-brand-purple-1000 bg-brand-purple-50";
      
      const { container: mapContainer } = render(<MapPinIcon className={testClass} />);
      const { container: phoneContainer } = render(<PhoneIcon className={testClass} />);
      const { container: envelopeContainer } = render(<EnvelopeIcon className={testClass} />);
      const { container: clockContainer } = render(<ClockIcon className={testClass} />);
      const { container: waContainer } = render(<WhatsAppIcon className={testClass} />);

      const svgs = [
        mapContainer.querySelector("svg"),
        phoneContainer.querySelector("svg"),
        envelopeContainer.querySelector("svg"),
        clockContainer.querySelector("svg"),
        waContainer.querySelector("svg"),
      ];

      svgs.forEach((svg) => {
        expect(svg).toHaveClass("w-12");
        expect(svg).toHaveClass("h-12");
        expect(svg).toHaveClass("text-brand-purple-1000");
        expect(svg).toHaveClass("bg-brand-purple-50");
      });
    });
  });

  // Test 3: Structural Properties Integrity checks
  describe("SVG Technical Properties Verification", () => {
    it("asserts correct stroke parameters exist on structural outline icons", () => {
      const { container: mapContainer } = render(<MapPinIcon />);
      const mapSvg = mapContainer.querySelector("svg");
      expect(mapSvg).toHaveAttribute("fill", "none");
      expect(mapSvg).toHaveAttribute("stroke", "currentColor");
      expect(mapSvg).toHaveAttribute("stroke-width", "2");

      const { container: phoneContainer } = render(<PhoneIcon />);
      const phoneSvg = phoneContainer.querySelector("svg");
      expect(phoneSvg).toHaveAttribute("fill", "none");
      expect(phoneSvg).toHaveAttribute("stroke", "currentColor");
      expect(phoneSvg).toHaveAttribute("stroke-width", "2");

      const { container: envContainer } = render(<EnvelopeIcon />);
      const envSvg = envContainer.querySelector("svg");
      expect(envSvg).toHaveAttribute("fill", "none");
      expect(envSvg).toHaveAttribute("stroke", "currentColor");
      expect(envSvg).toHaveAttribute("stroke-width", "2");

      const { container: clockContainer } = render(<ClockIcon />);
      const clockSvg = clockContainer.querySelector("svg");
      expect(clockSvg).toHaveAttribute("fill", "none");
      expect(clockSvg).toHaveAttribute("stroke", "currentColor");
      expect(clockSvg).toHaveAttribute("stroke-width", "2");
    });

    it("asserts solid fill vectors configure properly for WhatsApp brand iconography", () => {
      const { container } = render(<WhatsAppIcon />);
      const svgElement = container.querySelector("svg");
      expect(svgElement).toHaveAttribute("fill", "currentColor");
      expect(svgElement).not.toHaveAttribute("stroke");
    });
  });
});