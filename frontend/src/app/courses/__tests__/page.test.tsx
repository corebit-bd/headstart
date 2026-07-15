import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CoursesPage from "../page";
import { Tab } from "@/types/nav";

// ============================================
// 1. Mock Complex Sub-components & Next.js Modules
// ============================================

// Mocking standard next/link to cleanly inspect target href attributes
jest.mock("next/link", () => {
  return function DummyLink({ children, href, ...props }: { children: React.ReactNode; href: string }) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  };
});

// Mocking Tabs component to expose rendered contents for verification
jest.mock("@/components/ui/Tabs", () => {
  return {
    Tabs: function DummyTabs({ tabs }: { tabs: Tab[] }) {
      return (
        <div data-testid="tabs-component">
          {tabs.map((tab) => (
            <div key={tab.id} data-testid={`tab-content-${tab.id}`}>
              <span className="tab-label">{tab.label}</span>
              <div className="tab-body">{tab.content}</div>
            </div>
          ))}
        </div>
      );
    },
  };
});

// ============================================
// 2. Core Test Suites
// ============================================
describe("CoursesPage Component Suite", () => {
  
  beforeEach(() => {
    render(<CoursesPage />);
  });

  it("renders the main page hero elements and sub-text details", () => {
    const mainHeading = screen.getByRole("heading", { name: /Our Courses/i, level: 1 });
    expect(mainHeading).toBeInTheDocument();
    
    expect(
      screen.getByText(/Comprehensive programs designed to guide students/i)
    ).toBeInTheDocument();
  });

  it("passes all courses structured tab configurations directly to the Tabs component", () => {
    expect(screen.getByTestId("tabs-component")).toBeInTheDocument();

    const expectedTabIds = [
      "acca-qualification-pathway",
      "skill-development-training",
    ];

    expectedTabIds.forEach((id) => {
      expect(screen.getByTestId(`tab-content-${id}`)).toBeInTheDocument();
    });
  });

  describe("Tab Internal Data Validations", () => {
    
    describe("ACCA Qualification Pathway Tab", () => {
      let accaTab: HTMLElement;

      beforeEach(() => {
        accaTab = screen.getByTestId("tab-content-acca-qualification-pathway");
      });

      it("verifies description overview context is correct", () => {
        expect(accaTab).toHaveTextContent("ACCA Qualification Pathway");
        expect(accaTab).toHaveTextContent("accounting, finance, audit, taxation, and business leadership");
      });

      it("verifies details and learning outcomes are populated for all ACCA levels", () => {
        // Foundation Level
        expect(accaTab).toHaveTextContent("ACCA Level 1");
        expect(accaTab).toHaveTextContent("ACCA Foundation Level");
        expect(accaTab).toHaveTextContent("HSC students");

        // Knowledge Level
        expect(accaTab).toHaveTextContent("ACCA Level 2");
        expect(accaTab).toHaveTextContent("Business & Technology (BT)");

        // Skills Level
        expect(accaTab).toHaveTextContent("ACCA Level 3");
        expect(accaTab).toHaveTextContent("Audit & Assurance (AA)");

        // Professional Level
        expect(accaTab).toHaveTextContent("ACCA Level 4");
        expect(accaTab).toHaveTextContent("Strategic Business Leader (SBL)");
      });

      it("checks navigation routes for apply now and consultation triggers", () => {
        const links = accaTab.querySelectorAll("a");
        const applyNowLink = Array.from(links).find(el => el.textContent === "Apply Now");
        const consultLink = Array.from(links).find(el => el.textContent === "Book Free Consultation");

        expect(applyNowLink).toBeInTheDocument();
        expect(applyNowLink).toHaveAttribute("href", "/enroll");

        expect(consultLink).toBeInTheDocument();
        expect(consultLink).toHaveAttribute("href", "https://wa.me/8801886091323");
      });
    });

    describe("Skill Development Training Tab", () => {
      let skillTab: HTMLElement;

      beforeEach(() => {
        skillTab = screen.getByTestId("tab-content-skill-development-training");
      });

      it("verifies description overview context is correct", () => {
        expect(skillTab).toHaveTextContent("Professional Skills Development");
        expect(skillTab).toHaveTextContent("Enhance your employment potential with essential");
      });

      it("renders the three structured technical skills courses successfully", () => {
        // Course 1: MS Office
        expect(skillTab).toHaveTextContent("Course 1: MS Office");
        expect(skillTab).toHaveTextContent("Microsoft Excel");

        // Course 2: AI
        expect(skillTab).toHaveTextContent("Course 2 : Artificial Intelligence (AI)");
        expect(skillTab).toHaveTextContent("practical AI tools and modern workflows");

        // Course 3: Bangladesh Tax and VAT
        expect(skillTab).toHaveTextContent("Course 3 : Bangladesh Tax and VAT");
        expect(skillTab).toHaveTextContent("fundamentals for the Bangladesh market");
      });

      it("checks navigation routes for action buttons", () => {
        const links = skillTab.querySelectorAll("a");
        const applyNowLink = Array.from(links).find(el => el.textContent === "Apply Now");
        const consultLink = Array.from(links).find(el => el.textContent === "Book Free Consultation");

        expect(applyNowLink).toBeInTheDocument();
        expect(applyNowLink).toHaveAttribute("href", "/enroll");

        expect(consultLink).toBeInTheDocument();
        expect(consultLink).toHaveAttribute("href", "https://wa.me/8801886091323");
      });
    });
  });
});