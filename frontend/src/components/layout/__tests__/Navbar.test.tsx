import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar";

// Mock usePathname from next/navigation
jest.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

// Mock Next.js Link component
jest.mock("next/link", () => {
  return ({
    children,
    href,
    className,
  }: {
    children: React.ReactNode;
    href: string;
    className?: string;
  }) => {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  };
});

describe("Navbar Component", () => {
  it("renders the logo 'HeadStart'", () => {
    render(<Navbar />);
    // Fixed: querying by the image's alt text since the logo is an <img> tag
    const logo = screen.getByAltText(/HeadStart Logo/i);
    expect(logo).toBeInTheDocument();
  });

  it("renders the main navigation links", () => {
    render(<Navbar />);
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("Faculty")).toBeInTheDocument();
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
  });

  it("renders the 'Apply Now' CTA button", () => {
    render(<Navbar />);
    const applyBtn = screen.getByRole("button", { name: /apply now/i });
    expect(applyBtn).toBeInTheDocument();
  });

  it("toggles the Services dropdown on hover", () => {
    render(<Navbar />);
    const servicesButton = screen.getByRole("button", { name: /services/i });
    // Finds the parent div element that holds the mouse event listeners
    const dropdownContainer = servicesButton.closest("div");

    // Dropdown should not be visible initially
    expect(screen.queryByText("ACCA Courses")).not.toBeInTheDocument();

    // Trigger hover (mouseenter)
    if (dropdownContainer) {
      fireEvent.mouseEnter(dropdownContainer);
    }
    expect(screen.getByText("ACCA Courses")).toBeInTheDocument();

    // Trigger mouseleave
    if (dropdownContainer) {
      fireEvent.mouseLeave(dropdownContainer);
    }
    expect(screen.queryByText("ACCA Courses")).not.toBeInTheDocument();
  });
});