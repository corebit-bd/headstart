import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactUsPage from "../page";

// Mock next/link to prevent routing context errors in tests
jest.mock("next/link", () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
});

describe("ContactUsPage Component Integration Suite", () => {
  
  // Test 1: Structural & Text Content Layout
  describe("Hero Section & Layout Elements", () => {
    it("renders the primary main heading element", () => {
      render(<ContactUsPage />);
      const heading = screen.getByRole("heading", { name: /^Contact Us$/i, level: 1 });
      expect(heading).toBeInTheDocument();
    });

    it("renders the sub-heading contextual paragraphs", () => {
      render(<ContactUsPage />);
      expect(screen.getByText(/Get in touch with HeadStart and take the first step/i)).toBeInTheDocument();
      expect(screen.getByText(/We are here to help students and parents/i)).toBeInTheDocument();
    });
  });

  // Test 2: Quick Navigation Actions
  describe("Quick Navigation Actions Panel", () => {
    it("verifies enrollment actions are present with correct navigation attributes", () => {
      render(<ContactUsPage />);
      
      const enrollLink = screen.getAllByRole("link", { name: /Apply Now/i })[0];
      expect(enrollLink).toHaveAttribute("href", "/enroll");

      const counsellingLink = screen.getAllByRole("link", { name: /Book Free Counselling/i })[0];
      expect(counsellingLink).toHaveAttribute("href", "#counselling-form");
    });

    it("verifies direct touch points operate with correct protocol paths", () => {
      render(<ContactUsPage />);
      
      // Use exact string matching or a strict regex anchoring to match "Call Now" precisely
      const callLink = screen.getByRole("link", { name: /^Call Now$/i });
      expect(callLink).toHaveAttribute("href", "tel:+8801886091323");

      // Find all elements containing "WhatsApp" to handle both actions safely
      const whatsappLinks = screen.getAllByRole("link", { name: /WhatsApp/i });
      whatsappLinks.forEach((link) => {
        expect(link).toHaveAttribute("href", "https://wa.me/8801886091323");
        expect(link).toHaveAttribute("target", "_blank");
      });
    });
  });

  // Test 3: Interactive Request Form Inputs
  describe("Counselling Request Form Controls", () => {
    it("verifies all form components and inputs exist", () => {
      render(<ContactUsPage />);
      
      expect(screen.getByLabelText(/Full Name \*/i)).toBeRequired();
      expect(screen.getByLabelText(/Phone Number \*/i)).toBeRequired();
      expect(screen.getByLabelText(/Email Address \*/i)).toBeRequired();
      expect(screen.getByLabelText(/Interested Course \*/i)).toBeRequired();
      expect(screen.getByLabelText(/Preferred Level/i)).not.toBeRequired();
      expect(screen.getByLabelText(/Message \*/i)).toBeRequired();
    });

    it("verifies selection components have correct predefined options", () => {
      render(<ContactUsPage />);
      
      const selectCourse = screen.getByLabelText(/Interested Course \*/i) as HTMLSelectElement;
      expect(selectCourse.options[1].value).toBe("acca");
      expect(selectCourse.options[2].value).toBe("fia");
      expect(selectCourse.options[3].value).toBe("oxford-brookes");

      const selectLevel = screen.getByLabelText(/Preferred Level/i) as HTMLSelectElement;
      expect(selectLevel.options[1].value).toBe("applied-knowledge");
      expect(selectLevel.options[2].value).toBe("applied-skills");
      expect(selectLevel.options[3].value).toBe("strategic-professional");
    });

    it("validates that the submit button exists with correct markup", () => {
      render(<ContactUsPage />);
      const submitBtn = screen.getByRole("button", { name: /Submit & Get Free Counselling/i });
      expect(submitBtn).toBeInTheDocument();
      expect(submitBtn).toHaveAttribute("type", "submit");
    });
  });

  // Test 4: Embedded Structural Map Integration
  describe("Google Maps Embed Interface", () => {
    it("renders the active color-mapped iframe framework properly", () => {
      render(<ContactUsPage />);
      const iframe = screen.getByTitle("HeadStart Dhanmondi Location Map") as HTMLIFrameElement;
      
      expect(iframe).toBeInTheDocument();
      expect(iframe.src).toContain("maps.google.com/maps");
      expect(iframe.src).toContain("q=HeadStart+Professional+Accountancy+Services");
      expect(iframe.src).toContain("output=embed");
    });
  });
});