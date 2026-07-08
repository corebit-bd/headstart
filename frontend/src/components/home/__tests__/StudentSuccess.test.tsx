import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import StudentSuccess from "../StudentSuccess";

describe("StudentSuccess Component", () => {
  it("renders the section heading correctly", () => {
    render(<StudentSuccess />);

    const heading = screen.getByRole("heading", {
      level: 2,
      name: /Consistent Record of Excellence/i,
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass(
      "font-heading",
      "text-3xl",
      "font-bold",
      "text-black-1000",
    );
    expect(heading).toHaveAttribute("id", "success-heading");
  });

  it("renders the section description text", () => {
    render(<StudentSuccess />);

    const description = screen.getByText(
      /HeadStart students continue to demonstrate strong academic performance/i,
    );
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass("font-body", "text-black-800");
  });

  it("applies the correct layout and background classes to the section", () => {
    const { container } = render(<StudentSuccess />);
    const section = container.querySelector("section");

    expect(section).toBeInTheDocument();
    expect(section).toHaveClass("bg-brand-grey-1000", "py-16");
    expect(section).toHaveAttribute("aria-labelledby", "success-heading");
  });

  it("renders the latest results highlight region", () => {
    render(<StudentSuccess />);

    const region = screen.getByRole("region", {
      name: /Latest Results Highlight/i,
    });
    expect(region).toBeInTheDocument();
    expect(region).toHaveClass("bg-success-50", "border-success-1000");

    expect(
      screen.getByText(/Latest Milestone Achieved/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/100% first-attempt pass rate/i),
    ).toBeInTheDocument();
  });

  it("renders the view verified batch listings button", () => {
    render(<StudentSuccess />);

    const button = screen.getByRole("button", {
      name: /View Verified Batch Listings/i,
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-brand-purple-1000", "text-white");
  });

  it("renders all three performance metrics", () => {
    render(<StudentSuccess />);

    const stats = [
      { value: "85%", label: "Pass Rate" },
      { value: "12+", label: "Prize Winners" },
      { value: "1,500+", label: "Students Trained" },
    ];

    stats.forEach(({ value, label }) => {
      expect(screen.getByText(value)).toBeInTheDocument();
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it("renders the verified high-flyers section heading", () => {
    render(<StudentSuccess />);

    const heading = screen.getByRole("heading", {
      level: 2,
      name: /Verified High-Flyers & Social Recognitions/i,
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("font-heading", "text-black-900");
  });

  it("renders all three achievement cards", () => {
    render(<StudentSuccess />);

    const students = [
      "Amina Rahman",
      "Zayan Ahmed",
      "Sania Mirza",
    ];

    students.forEach((name) => {
      expect(
        screen.getByRole("heading", { level: 3, name }),
      ).toBeInTheDocument();
    });
  });
});
