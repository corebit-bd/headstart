import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ACCAProfessionalPathway from "../ACCAProfessionalPathway";

describe("ACCAProfessionalPathway Component", () => {
  beforeEach(() => {
    render(<ACCAProfessionalPathway />);
  });

  test("renders all three core pathway stages", () => {
    // Check for stage badges
    expect(screen.getByText("Foundation")).toBeInTheDocument();
    expect(screen.getByText("Intermediate")).toBeInTheDocument();
    expect(screen.getByText("Advanced")).toBeInTheDocument();

    // Check for main stage headings
    expect(screen.getByRole("heading", { name: "Applied Knowledge", level: 2 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Applied Skills", level: 2 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Strategic Professional", level: 2 })).toBeInTheDocument();
  });

  test("renders Descriptions for each step card", () => {
    expect(
      screen.getByText(/Build the essential financial and business knowledge/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Develop technical competence across the core disciplines/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Master strategic thinking and leadership skills/i)
    ).toBeInTheDocument();
  });

  test("renders correct tags/subjects under each stage", () => {
    // Foundation Level Subjects
    expect(screen.getByText("Business & Tech")).toBeInTheDocument();
    expect(screen.getByText("Management Accounting")).toBeInTheDocument();
    expect(screen.getByText("Financial Accounting")).toBeInTheDocument();

    // Intermediate Level Subjects
    expect(screen.getByText("Corporate & Business Law")).toBeInTheDocument();
    expect(screen.getByText("Performance Management")).toBeInTheDocument();
    expect(screen.getByText("Taxation")).toBeInTheDocument();
    expect(screen.getByText("Financial Reporting")).toBeInTheDocument();
    expect(screen.getByText("Audit")).toBeInTheDocument();
    expect(screen.getByText("Financial Management")).toBeInTheDocument();

    // Advanced Level Subjects
    expect(screen.getByText("SBL")).toBeInTheDocument();
    expect(screen.getByText("SBR")).toBeInTheDocument();
    expect(screen.getByText("AFM / APM")).toBeInTheDocument();
    expect(screen.getByText("ATX / AAA")).toBeInTheDocument();
  });

  test("renders specific exam counts and configuration metadata", () => {
    // Exam numbers and types
    expect(screen.getByText("3 Exams · Entry Level")).toBeInTheDocument();
    expect(screen.getByText("6 exams · Core Skills")).toBeInTheDocument();
    expect(screen.getByText("4 Exams · 2 Essential + 2 Options")).toBeInTheDocument();

    // Sitting types
    expect(screen.getByText("Computer-based · Flexible Sittings")).toBeInTheDocument();
    expect(screen.getByText("Session-based · Annual Sittings")).toBeInTheDocument();
    expect(screen.getByText("Strategic-level · Chartered Status")).toBeInTheDocument();
  });
});