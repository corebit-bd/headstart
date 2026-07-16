import { render, screen } from "@testing-library/react";
import React from "react";
import CoursesPage from "../page";

// Define strict typing shapes for our UI architecture components
interface MockLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

interface MockTabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface MockTabsProps {
  tabs: MockTabItem[];
  fullWidth?: boolean;
}

// Mock Next.js Link component cleanly ensuring proper default ESM export structure
jest.mock("next/link", () => {
  const MockLink = ({ children, href, ...props }: MockLinkProps) => (
    <a href={href} {...props}>
      {children}
    </a>
  );
  MockLink.displayName = "Link";
  return {
    __esModule: true,
    default: MockLink,
  };
});

// Mock the Tabs UI module matching structural specs
jest.mock("@/components/ui/Tabs", () => {
  const MockTabs = ({ tabs }: MockTabsProps) => (
    <div>
      <div role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            onClick={() => {
              const el = document.getElementById(tab.id);
              if (el) el.scrollIntoView();
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {tabs.map((tab) => (
          <div key={tab.id} id={tab.id} role="tabpanel">
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
  MockTabs.displayName = "Tabs";
  return {
    __esModule: true,
    Tabs: MockTabs,
  };
});

describe("CoursesPage Component", () => {
  it("renders the modernized hero header correctly", () => {
    render(<CoursesPage />);
    
    const mainHeading = screen.getByRole("heading", { level: 1 });
    expect(mainHeading).toHaveTextContent("Our Courses");

    expect(
      screen.getByText(/Comprehensive programs designed to guide students/i)
    ).toBeInTheDocument();
  });

  it("renders all defined navigation tabs", () => {
    render(<CoursesPage />);
    
    // Target tabs strictly within the specific container role
    const tabsList = screen.getByRole("tablist");
    expect(tabsList).toBeInTheDocument();

    // Verify the presence of exactly two tab controls inside it
    const tabs = screen.getAllByRole("tab");
    expect(tabs.length).toBe(2);

    // Verify their explicit content layout safely
    expect(tabs[0]).toHaveTextContent("ACCA Qualification Pathway");
    expect(tabs[1]).toHaveTextContent("Skill Development Training");
  });

  it("displays ACCA pathway milestones and descriptions on load", () => {
    render(<CoursesPage />);
    
    expect(screen.getByText("ACCA Level 1")).toBeInTheDocument();
    expect(screen.getByText("ACCA Foundation Level")).toBeInTheDocument();
    expect(screen.getByText("ACCA Level 4")).toBeInTheDocument();
    expect(screen.getByText("ACCA Professional Level")).toBeInTheDocument();
  });

  it("displays professional skill training courses within the ecosystem", () => {
    render(<CoursesPage />);
    
    expect(screen.getByText("Course 1: MS Office")).toBeInTheDocument();
    expect(screen.getByText("Course 2 : Artificial Intelligence (AI)")).toBeInTheDocument();
    expect(screen.getByText("Course 3 : Bangladesh Tax and VAT")).toBeInTheDocument();
  });

  it("contains valid conversion hyperlinks for user onboarding paths", () => {
    render(<CoursesPage />);
    
    const applyLinks = screen.getAllByRole("link", { name: "Apply Now" });
    expect(applyLinks.length).toBeGreaterThan(0);
    applyLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "/enroll");
    });

    const consultLinks = screen.getAllByRole("link", { name: "Book Free Consultation" });
    expect(consultLinks.length).toBeGreaterThan(0);
    consultLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "https://wa.me/8801886091323");
    });
  });
});