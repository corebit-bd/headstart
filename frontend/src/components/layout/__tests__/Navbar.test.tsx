// Navbar.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../Navbar";

// ============================================
// 1. Mock NextJS Modules & Atomic Components
// ============================================

// Mocking next/image to easily inspect image src and alt attributes
jest.mock("next/image", () => {
  return function DummyImage({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
    return <img src={src} alt={alt} width={width} height={height} data-testid="navbar-logo" />;
  };
});

// Mocking next/link to cleanly inspect target href attributes
jest.mock("next/link", () => {
  return function DummyLink({ children, href, ...props }: React.ComponentPropsWithoutRef<"a">) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  };
});

// Mocking local NavLink atomic component securely without using 'any'
jest.mock("@/components/ui/NavLink", () => {
  return {
    NavLink: function DummyNavLink({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) {
      const cleanId = href.replace("/", "");
      return (
        <a href={href} className={className} data-testid={`nav-link-${cleanId}`}>
          {children}
        </a>
      );
    },
  };
});

// Mocking local Button atomic component
jest.mock("@/components/ui/Button", () => {
  return {
    Button: function DummyButton({ children, variant, size }: { children: React.ReactNode; variant?: string; size?: string }) {
      return (
        <button data-variant={variant} data-size={size}>
          {children}
        </button>
      );
    },
  };
});

// ============================================
// 2. Core Test Suites
// ============================================
describe("Navbar Component Suite", () => {
  
  beforeEach(() => {
    render(<Navbar />);
  });

  it("renders the organization brand logo pointing to the homepage root", () => {
    const logoImage = screen.getByTestId("navbar-logo");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", "/logo.png");
    expect(logoImage).toHaveAttribute("alt", "HeadStart Logo");

    // Parent navigation link verification
    const logoLink = logoImage.closest("a");
    expect(logoLink).toHaveAttribute("href", "/");
  });

  it("verifies that all navigation links are active and accessible", () => {
    // About Us Link
    const aboutLink = screen.getByTestId("nav-link-about");
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute("href", "/about");
    expect(aboutLink).toHaveTextContent("About Us");

    // Courses Link
    const coursesLink = screen.getByTestId("nav-link-courses");
    expect(coursesLink).toBeInTheDocument();
    expect(coursesLink).toHaveAttribute("href", "/courses");
    expect(coursesLink).toHaveTextContent("Courses");

    // Life at HeadStart Link
    const lifeLink = screen.getByTestId("nav-link-life-at-headstart");
    expect(lifeLink).toBeInTheDocument();
    expect(lifeLink).toHaveAttribute("href", "/life-at-headstart");
    expect(lifeLink).toHaveTextContent("Life at HeadStart");

    // Student Support Link
    const studentSupportLink = screen.getByTestId("nav-link-student-support");
    expect(studentSupportLink).toBeInTheDocument();
    expect(studentSupportLink).toHaveAttribute("href", "/student-support");
    expect(studentSupportLink).toHaveTextContent("Student Support");

    // Contact Us Link
    const contactUsLink = screen.getByTestId("nav-link-contact-us");
    expect(contactUsLink).toBeInTheDocument();
    expect(contactUsLink).toHaveAttribute("href", "/contact-us");
    expect(contactUsLink).toHaveTextContent("Contact Us");
  });

  it("renders the primary action button to enroll with appropriate variations and routes", () => {
    const applyButton = screen.getByRole("button", { name: /Apply Now/i });
    expect(applyButton).toBeInTheDocument();
    expect(applyButton).toHaveAttribute("data-variant", "secondary");
    expect(applyButton).toHaveAttribute("data-size", "lg");

    // Verifies button routes cleanly to the correct call to action
    const wrapperLink = applyButton.closest("a");
    expect(wrapperLink).toHaveAttribute("href", "/enroll");
  });
});