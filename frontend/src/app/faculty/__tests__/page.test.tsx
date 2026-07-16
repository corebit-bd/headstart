import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FacultyList from "../page";

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

describe("FacultyList Component", () => {
  it("renders faculty roles and specialties", () => {
    render(<FacultyList />);

    expect(screen.getByText("Lead ACCA Instructor")).toBeInTheDocument();
    expect(
      screen.getByText(/Specializing in Strategic Business Reporting \(SBR\)/),
    ).toBeInTheDocument();

    expect(screen.getByText("Senior Advisory Consultant")).toBeInTheDocument();
    expect(
      screen.getByText(/Specializing in Risk Management & Ethics/),
    ).toBeInTheDocument();

    expect(screen.getByText("Academic Coordinator")).toBeInTheDocument();
    expect(
      screen.getByText(/Specializing in Audit & Assurance \(AA\)/),
    ).toBeInTheDocument();
  });

  it("renders all faculty members from the list", () => {
    render(<FacultyList />);
    expect(screen.getByText("Dr. Ariful Haque")).toBeInTheDocument();
    expect(screen.getByText("Sarah J. Miller")).toBeInTheDocument();
    expect(screen.getByText("Tanvir Rahman")).toBeInTheDocument();
  });

  it("renders profile links with slugified URLs", () => {
    render(<FacultyList />);

    const links = screen.getAllByRole("link", {
      name: /View Professional Profile →/i,
    });

    const drArifulLink = links.find(
      (l) => l.getAttribute("href") === "/faculty/dr.-ariful-haque",
    );
    const sarahLink = links.find(
      (l) => l.getAttribute("href") === "/faculty/sarah-j.-miller",
    );
    const tanvirLink = links.find(
      (l) => l.getAttribute("href") === "/faculty/tanvir-rahman",
    );

    expect(drArifulLink).toBeInTheDocument();
    expect(sarahLink).toBeInTheDocument();
    expect(tanvirLink).toBeInTheDocument();
  });

  it("renders the 'Join the Faculty' CTA section", () => {
    render(<FacultyList />);

    const ctaHeading = screen.getByRole("heading", {
      name: /Are you an expert in your field\?/i,
    });
    expect(ctaHeading).toBeInTheDocument();
    expect(ctaHeading).toHaveClass("font-heading", "text-2xl", "font-bold");

    const applyLink = screen.getByRole("link", { name: /Apply to Join/i });
    expect(applyLink).toBeInTheDocument();
    expect(applyLink).toHaveAttribute("href", "/contact");
    expect(applyLink).toHaveClass("bg-brand-purple-1000");
  });

  it("renders visual decoration placeholders", () => {
    render(<FacultyList />);
    const placeholders = screen.getAllByText(/Photo Placeholder/i);
    expect(placeholders).toHaveLength(3);
  });
});
