import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../Footer"; // Adjust this import path depending on where your Footer.tsx is located

// Mock next/link to safely forward all React anchor props (like target, rel, etc.) without using 'any'
jest.mock("next/link", () => {
  return ({ 
    children, 
    href, 
    ...rest 
  }: { 
    children: React.ReactNode; 
    href: string; 
  } & React.ComponentPropsWithoutRef<"a">) => {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  };
});

// Mock next/image since Jest doesn't run in a browser environment with full layout parsing
jest.mock("next/image", () => {
  return ({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) => {
    return <img src={src} alt={alt} width={width} height={height} />;
  };
});

describe("Footer Component Integration Suite", () => {

  // Test 1: Brand details and short description
  describe("Brand Column & Core Information", () => {
    it("renders the HeadStart logo image and heading brand name correctly", () => {
      render(<Footer />);
      
      const logoImg = screen.getByRole("img", { name: /HeadStart Logo/i });
      expect(logoImg).toBeInTheDocument();
      expect(logoImg).toHaveAttribute("src", "/logo.png");

      const brandTitle = screen.getByRole("heading", { name: /^HeadStart$/i, level: 2 });
      expect(brandTitle).toBeInTheDocument();
    });

    it("displays the correct HeadStart status and ACCA learning partner descriptions", () => {
      render(<Footer />);
      
      const description = screen.getByText(/A GOLD Approved Learning Partner, Approved Employer/i);
      expect(description).toBeInTheDocument();
      expect(screen.getByText(/Licensed CBE Centre of ACCA/i)).toBeInTheDocument();
    });
  });

  // Test 2: Quick Links Navigation Section
  describe("Quick Links Section", () => {
    it("verifies all structural navigation items exist with accurate paths", () => {
      render(<Footer />);

      expect(screen.getByRole("heading", { name: /^Quick Links$/i, level: 3 })).toBeInTheDocument();

      const aboutLink = screen.getByRole("link", { name: /^About Us$/i });
      expect(aboutLink).toHaveAttribute("href", "/about");

      const facultyLink = screen.getByRole("link", { name: /^Our Faculty$/i });
      expect(facultyLink).toHaveAttribute("href", "/faculty");

      const supportLink = screen.getByRole("link", { name: /^Student Support$/i });
      expect(supportLink).toHaveAttribute("href", "/student-support");

      const blogLink = screen.getByRole("link", { name: /^News & Blog$/i });
      expect(blogLink).toHaveAttribute("href", "/blog");

      const privacyLink = screen.getByRole("link", { name: /^Privacy Policy$/i });
      expect(privacyLink).toHaveAttribute("href", "/privacy");
    });
  });

  // Test 3: Courses Section Links
  describe("Courses Section Links", () => {
    it("verifies key education routes are mapped with correct anchor tags", () => {
      render(<Footer />);

      expect(screen.getByRole("heading", { name: /^Courses$/i, level: 3 })).toBeInTheDocument();

      const accaLink = screen.getByRole("link", { name: /^ACCA Professional Link$/i });
      expect(accaLink).toHaveAttribute("href", "/services/acca");

      const fiaLink = screen.getByRole("link", { name: /^FIA \(Foundations in Accountancy\)$/i });
      expect(fiaLink).toHaveAttribute("href", "/services/acca");

      const sdcLink = screen.getByRole("link", { name: /^Skill Development Courses$/i });
      expect(sdcLink).toHaveAttribute("href", "/services/sdc");

      const advisoryLink = screen.getByRole("link", { name: /^Professional Advisory$/i });
      expect(advisoryLink).toHaveAttribute("href", "/services/advisory");

      const trainingLink = screen.getByRole("link", { name: /^Corporate Training$/i });
      expect(trainingLink).toHaveAttribute("href", "/services/trainings");
    });
  });

  // Test 4: Dynamic Contact details
  describe("Contact Details Section", () => {
    it("displays accurate communication methods and local maps/address data", () => {
      render(<Footer />);

      expect(screen.getByRole("heading", { name: /^Contact Us$/i, level: 3 })).toBeInTheDocument();

      // Check Address
      expect(screen.getByText(/Rangs Fortune Square, Road 2, Dhanmondi, Dhaka, Bangladesh/i)).toBeInTheDocument();

      // Check Telephone Protocol link
      const phoneLink = screen.getByRole("link", { name: "+880 1886-091323" });
      expect(phoneLink).toHaveAttribute("href", "tel:+8801886091323");

      // Check Email Link
      const emailLink = screen.getByRole("link", { name: "info@headstartbd.com" });
      expect(emailLink).toHaveAttribute("href", "mailto:info@headstartbd.com");
    });
  });

  // Test 5: Call to Action buttons
  describe("Call To Action Banner Links", () => {
    it("renders the primary application route and modern chat options", () => {
      render(<Footer />);

      // Verify WhatsApp CTA Action
      const whatsappCTA = screen.getByRole("link", { name: /WhatsApp Us/i });
      expect(whatsappCTA).toHaveAttribute("href", "https://wa.me/8801886091323");
      expect(whatsappCTA).toHaveAttribute("target", "_blank");

      // Verify Apply Now Action
      const applyNowCTA = screen.getByRole("link", { name: /^Apply Now$/i });
      expect(applyNowCTA).toHaveAttribute("href", "/enroll");
    });
  });

  // Test 6: Social Media Icons & Connections
  describe("Social Media Links", () => {
    it("provides clean navigation paths with access requirements to major platforms", () => {
      render(<Footer />);

      const facebookLink = screen.getByRole("link", { name: "Facebook" });
      expect(facebookLink).toHaveAttribute("href", "https://www.facebook.com/HeadStart.accountancy");
      expect(facebookLink).toHaveAttribute("target", "_blank");

      const linkedInLink = screen.getByRole("link", { name: "LinkedIn" });
      expect(linkedInLink).toHaveAttribute("href", "https://linkedin.com/company/headstartbd");
      expect(linkedInLink).toHaveAttribute("target", "_blank");

      const youtubeLink = screen.getByRole("link", { name: "YouTube" });
      expect(youtubeLink).toHaveAttribute("href", "https://youtube.com/@headstartbd");
      expect(youtubeLink).toHaveAttribute("target", "_blank");
    });
  });

  // Test 7: Intellectual Property / Credits Bottom Bar
  describe("Copyright Information Footer Row", () => {
    it("calculates dynamically the current year dynamically and renders developer attribution", () => {
      render(<Footer />);
      const currentYear = new Date().getFullYear();

      expect(screen.getByText(new RegExp(`© ${currentYear} HeadStart\\. All rights reserved\\.`, "i"))).toBeInTheDocument();
      expect(screen.getByText(/Developed By/i)).toBeInTheDocument();
      expect(screen.getByText(/CoreBit/i)).toBeInTheDocument();
    });
  });
});