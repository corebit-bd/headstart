import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FacultyPreview from "../FacultyPreview";

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

describe("FacultyPreview Component", () => {
  it("renders the Section Heading correctly", () => {
    render(<FacultyPreview />);

    const heading = screen.getByRole("heading", {
      level: 2,
      name: /Learn from the Best/i,
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass(
      "font-heading",
      "text-3xl",
      "font-bold",
      "text-black-900",
    );
  });

  it("renders the section description text", () => {
    render(<FacultyPreview />);

    const description = screen.getByText(
      /Our faculty consists of qualified ACCA professionals/i,
    );
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass(
      "mt-6",
      "font-body",
      "text-lg",
      "text-black-600",
    );
  });

  it("applies the correct Layout & Background Classes to the Section", () => {
    const { container } = render(<FacultyPreview />);
    const section = container.querySelector("section");

    expect(section).toBeInTheDocument();
    expect(section).toHaveClass("py-24", "bg-brand-grey-50");
  });

  it("renders all 3 faculty members", () => {
    render(<FacultyPreview />);

    const facultyNames = [
      "Dr. Ariful Haque",
      "Sarah J. Miller",
      "Tanvir Rahman",
    ];

    facultyNames.forEach((name) => {
      const facultyHeading = screen.getByRole("heading", {
        level: 3,
        name,
      });
      expect(facultyHeading).toBeInTheDocument();
      expect(facultyHeading).toHaveClass(
        "font-heading",
        "text-2xl",
        "font-bold",
        "text-black-900",
      );
    });
  });

  it("renders faculty specialties with correct styling", () => {
    render(<FacultyPreview />);

    const specialties = screen.getAllByText(/Specializing in/i);

    expect(specialties).toHaveLength(3);
    specialties.forEach((specialty) => {
      expect(specialty).toBeInTheDocument();
      expect(specialty).toHaveClass(
        "font-body",
        "text-sm",
        "text-black-500",
        "italic",
      );
    });
  });

  it("verifies the Card Container has Hover & Transition Styles", () => {
    render(<FacultyPreview />);

    const firstFacultyName = screen.getByText("Dr. Ariful Haque");
    const cardContainer = firstFacultyName.closest("div.group");
    const imageContainer = cardContainer?.querySelector(".rounded-2xl.border-2");

    expect(cardContainer).toHaveClass(
      "group",
      "flex",
      "flex-col",
      "items-center",
      "text-center",
    );
    expect(imageContainer).toHaveClass(
      "rounded-2xl",
      "border-2",
      "border-brand-purple-1000",
      "bg-brand-grey-1000",
    );
  });
});