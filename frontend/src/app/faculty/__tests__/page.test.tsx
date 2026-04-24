import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FacultyList from "../page";

// Updated Mock: Now passes className so toHaveClass works
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
  it("renders the main heading with correct branding", () => {
    render(<FacultyList />);
    expect(screen.getByText(/Meet Our/i)).toBeInTheDocument();
    const facultySpan = screen.getByText(/Faculty/i);
    expect(facultySpan).toHaveClass("text-brand-purple-1000");
  });

  it("renders all faculty members from the list", () => {
    render(<FacultyList />);
    expect(screen.getByText("Dr. Ariful Haque")).toBeInTheDocument();
    expect(screen.getByText("Sarah J. Miller")).toBeInTheDocument();
    expect(screen.getByText("Tanvir Rahman")).toBeInTheDocument();
  });

  it("renders profile links with slugified URLs", () => {
    render(<FacultyList />);

    // Fix: Find all links and verify specific attributes
    const links = screen.getAllByRole("link", {
      name: /View Professional Profile →/i,
    });

    const drArifulLink = links.find(
      (l) => l.getAttribute("href") === "/faculty/dr.-ariful-haque",
    );
    const sarahLink = links.find(
      (l) => l.getAttribute("href") === "/faculty/sarah-j.-miller",
    );

    expect(drArifulLink).toBeInTheDocument();
    expect(sarahLink).toBeInTheDocument();
  });

  it("renders the 'Join the Faculty' CTA section", () => {
    render(<FacultyList />);

    const applyLink = screen.getByRole("link", { name: /Apply to Join/i });
    expect(applyLink).toBeInTheDocument();
    expect(applyLink).toHaveAttribute("href", "/contact");

    // This will now pass because the mock includes 'className'
    expect(applyLink).toHaveClass("bg-brand-purple-1000");
  });

  it("renders visual decoration placeholders", () => {
    render(<FacultyList />);
    const placeholders = screen.getAllByText(/Photo Placeholder/i);
    expect(placeholders).toHaveLength(3);
  });
});
