import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar";

// Mock usePathname from next/navigation
jest.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("Navbar Component", () => {
  it("renders the logo 'HeadStart'", () => {
    render(<Navbar />);
    const logo = screen.getByText(/HeadStart/i);
    expect(logo).toBeInTheDocument();
  });

  it("renders the main navigation links", () => {
    render(<Navbar />);
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("Faculty")).toBeInTheDocument();
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
  });

  it("renders the 'Enroll Now' CTA button", () => {
    render(<Navbar />);
    const enrollBtn = screen.getByRole("button", { name: /enroll now/i });
    expect(enrollBtn).toBeInTheDocument();
  });

  it("toggles the Services dropdown on hover", () => {
    render(<Navbar />);
    const servicesLink = screen.getByText("Services");

    // Dropdown should not be visible initially
    expect(screen.queryByText("ACCA Courses")).not.toBeInTheDocument();

    // Trigger hover (mouseenter)
    fireEvent.mouseEnter(servicesLink.parentElement!);
    expect(screen.getByText("ACCA Courses")).toBeInTheDocument();

    // Trigger mouseleave
    fireEvent.mouseLeave(servicesLink.parentElement!);
    expect(screen.queryByText("ACCA Courses")).not.toBeInTheDocument();
  });
});
