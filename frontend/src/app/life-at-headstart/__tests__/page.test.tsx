import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LifeAtHeadStartPage from "../page";
import { Tab } from "@/types/nav";

// ============================================
// 1. Mock Next.js Link & Complex Assets
// ============================================
jest.mock("next/link", () => {
  return function DummyLink({ 
    children, 
    href, 
    ...props 
  }: React.ComponentPropsWithoutRef<"a">) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
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

// Mocking SVG Icons to prevent layout trees in structural test rendering
jest.mock("@/components/ui/LifeAtHeadStartIcons", () => ({
  TrophyIcon: ({ className }: { className?: string }) => <svg data-testid="icon-trophy" className={className} />,
  CalendarIcon: ({ className }: { className?: string }) => <svg data-testid="icon-calendar" className={className} />,
}));

// ============================================
// 2. Core Test Suites
// ============================================
describe("LifeAtHeadStartPage Component Suite", () => {
  
  beforeEach(() => {
    render(<LifeAtHeadStartPage />);
  });

  it("renders the main page header elements inside the hero layout section", () => {
    const mainHeading = screen.getByRole("heading", { name: /Life at HeadStart/i });
    expect(mainHeading).toBeInTheDocument();
    
    expect(
      screen.getByText(/Experience an Active, Community-Driven Journey/i)
    ).toBeInTheDocument();
  });

  it("passes all structured student life tab configurations cleanly to the Tabs component", () => {
    expect(screen.getByTestId("tabs-component")).toBeInTheDocument();

    const expectedTabIds = [
      "exam-results",
      "student-connect",
      "career-counselling",
      "training-sessions",
      "extracurricular",
      "upcoming-events",
    ];

    expectedTabIds.forEach((id) => {
      expect(screen.getByTestId(`tab-content-${id}`)).toBeInTheDocument();
    });
  });

  describe("Tab Structural Layout & Data Assertions", () => {
    
    it("verifies the exam results records and performance badges", () => {
      const resultsTab = screen.getByTestId("tab-content-exam-results");
      expect(resultsTab).toHaveTextContent("Championship in Academic Performance");
      expect(resultsTab).toHaveTextContent("Tanzim Rahman");
      expect(resultsTab).toHaveTextContent("Nabila Karim");
      expect(resultsTab).toHaveTextContent("Fahim Shahriar");
      
      expect(resultsTab).toHaveTextContent("Marks: 88%");
      expect(screen.getAllByTestId("icon-trophy").length).toBeGreaterThan(0);
    });

    it("verifies the student connection networking panels and highlights", () => {
      const connectTab = screen.getByTestId("tab-content-student-connect");
      expect(connectTab).toHaveTextContent("Connecting Ambition with Expertise");
      expect(connectTab).toHaveTextContent("Alumni Corporate Roundtables");
      expect(connectTab).toHaveTextContent("[ Member & Affiliate Networking Photo Placeholder ]");
    });

    it("verifies local market portals and global portability career structures", () => {
      const counsellingTab = screen.getByTestId("tab-content-career-counselling");
      expect(counsellingTab).toHaveTextContent("Guiding Your Future Path");
      expect(counsellingTab).toHaveTextContent("Local Growth Portals");
      expect(counsellingTab).toHaveTextContent("Global Portability Guidance");
    });

    it("verifies custom soft skill and executive communication modules", () => {
      const trainingTab = screen.getByTestId("tab-content-training-sessions");
      expect(trainingTab).toHaveTextContent("Beyond Technical Competency");
      expect(trainingTab).toHaveTextContent("Executive Communication");
      expect(trainingTab).toHaveTextContent("Interview Etiquette");
      expect(trainingTab).toHaveTextContent("Personality Alignment");
    });

    it("verifies sports carnivals and extra curricular creative workshop paths", () => {
      const activitiesTab = screen.getByTestId("tab-content-extracurricular");
      expect(activitiesTab).toHaveTextContent("Vibrant Campus Culture");
      expect(activitiesTab).toHaveTextContent("ACCA Cricket Carnival");
      expect(activitiesTab).toHaveTextContent("Campus Interactions");
    });

    it("verifies upcoming calendar modules render future seminar event arrays accurately", () => {
      const eventsTab = screen.getByTestId("tab-content-upcoming-events");
      expect(eventsTab).toHaveTextContent("Mark Your Calendar");
      expect(eventsTab).toHaveTextContent("ACCA Pathway Seminar 2026");
      expect(eventsTab).toHaveTextContent("Excel Corporate Modeling Bootcamp");
      
      expect(screen.getAllByTestId("icon-calendar").length).toBe(2);
    });

    it("ensures call-to-action link actions map out matching paths across layout elements", () => {
      const enrollLinks = screen.getAllByRole("link", { name: /Apply Now/i });
      expect(enrollLinks.length).toBe(6); 
      enrollLinks.forEach(link => {
        expect(link).toHaveAttribute("href", "/enroll");
      });

      const supportLinks = screen.getAllByRole("link", { name: /Book Free Consultation/i });
      expect(supportLinks.length).toBe(6);
      supportLinks.forEach(link => {
        expect(link).toHaveAttribute("href", "https://wa.me/8801886091323");
        expect(link).toHaveAttribute("target", "_blank");
      });
    });
  });
});