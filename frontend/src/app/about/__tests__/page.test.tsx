import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AboutUsPage from "../page";
import { Tab } from "@/types/nav";

// ============================================
// 1. Mock Complex Sub-components & Assets
// ============================================
jest.mock("../../faculty/page", () => {
  return function DummyFacultyList() {
    return <div data-testid="faculty-list">Mocked Faculty List</div>;
  };
});

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

// Mocking SVG Icons to avoid rendering mass path trees in test snapshots
jest.mock("@/components/ui/KeyDifferentiatorsIcons", () => ({
  IntegrationIcon: () => <svg data-testid="icon-integration" />,
  ResultIcon: () => <svg data-testid="icon-result" />,
  FacultyIcon: () => <svg data-testid="icon-faculty" />,
  MentorshipIcon: () => <svg data-testid="icon-mentorship" />,
  CareerIcon: () => <svg data-testid="icon-career" />,
  SupportIcon: () => <svg data-testid="icon-support" />,
}));

jest.mock("@/components/ui/AlumniIcons", () => ({
  CheckIcon: () => <span data-testid="icon-check" />,
  DeloitteLogo: () => <span data-testid="logo-deloitte" />,
  EYLogo: () => <span data-testid="logo-ey" />,
  KPMGLogo: () => <span data-testid="logo-kpmg" />,
  LogoCard: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  PwCLogo: () => <span data-testid="logo-pwc" />,
  QuoteIcon: () => <span data-testid="icon-quote" />,
  TrackWrapper: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  TrendUpIcon: () => <span data-testid="icon-trendup" />,
}));

// ============================================
// 2. Core Test Suites
// ============================================
describe("AboutUsPage Component Suite", () => {
  
  beforeEach(() => {
    render(<AboutUsPage />);
  });

  it("renders the main page header elements inside the hero section", () => {
    const mainHeading = screen.getByRole("heading", { name: /About HeadStart/i });
    expect(mainHeading).toBeInTheDocument();
    
    expect(
      screen.getByText(/Shaping the next generation of ACCA professionals/i)
    ).toBeInTheDocument();
  });

  it("passes all required structured tab configurations directly to the Tabs component", () => {
    expect(screen.getByTestId("tabs-component")).toBeInTheDocument();

    const expectedTabIds = [
      "introduction",
      "mission-vision",
      "key-differentiators",
      "faculty",
      "prizewinner",
      "alumni",
      "accreditations",
      "partnerships",
    ];

    expectedTabIds.forEach((id) => {
      expect(screen.getByTestId(`tab-content-${id}`)).toBeInTheDocument();
    });
  });

  describe("Tab Internal Data Validations", () => {
    
    it("verifies the introduction data structure content", () => {
      const introTab = screen.getByTestId("tab-content-introduction");
      expect(introTab).toHaveTextContent("HeadStart is an ACCA Approved Learning Partner");
      expect(introTab).toHaveTextContent("HeadStart Entrance Image");
    });

    it("verifies the mission and vision statements exist side by side", () => {
      const mvTab = screen.getByTestId("tab-content-mission-vision");
      expect(mvTab).toHaveTextContent("Our Mission");
      expect(mvTab).toHaveTextContent("Our Vision");
    });

    it("verifies the differentiator criteria grid handles headers and lists cleanly", () => {
      const diffTab = screen.getByTestId("tab-content-key-differentiators");
      expect(diffTab).toHaveTextContent("What Makes HeadStart Different?");
      expect(diffTab).toHaveTextContent("Academic + Advisory Integration");
      expect(diffTab).toHaveTextContent("Strong Student Support System");
    });

    it("renders the external faculty component accurately under the faculty tab context", () => {
      const facultyTab = screen.getByTestId("tab-content-faculty");
      expect(facultyTab).toHaveTextContent("Meet Our Faculty");
      expect(screen.getByTestId("faculty-list")).toBeInTheDocument();
    });

    it("renders national prize winner placeholders and custom rank details", () => {
      const prizeTab = screen.getByTestId("tab-content-prizewinner");
      expect(prizeTab).toHaveTextContent("ACCA Champs");
      expect(screen.getAllByText("Global Rank: #1")).toHaveLength(3);
    });

    it("verifies career metric outcomes, testimonials, and marquees under the alumni layout", () => {
      const alumniTab = screen.getByTestId("tab-content-alumni");
      
      // Verified metric calculations
      expect(alumniTab).toHaveTextContent("94%");
      expect(alumniTab).toHaveTextContent("Employment within 6 Months");
      
      // Testimonial validation
      expect(alumniTab).toHaveTextContent("Sarah Jenkins");
      expect(alumniTab).toHaveTextContent("David Chen");
      
      // Infinite marquee tracks check
      expect(screen.getAllByTestId("logo-deloitte").length).toBeGreaterThan(0);
    });

    it("renders text nodes for accreditations and corporate partnerships safely", () => {
      expect(screen.getByTestId("tab-content-accreditations")).toHaveTextContent(
        "ACCA Approved Learning Partner"
      );
      expect(screen.getByTestId("tab-content-partnerships")).toHaveTextContent(
        "Collaborating with top-tier organizations"
      );
    });
  });
});