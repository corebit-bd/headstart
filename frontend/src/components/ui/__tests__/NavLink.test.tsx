import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { NavLink } from "../NavLink";

describe("NavLink Component", () => {
  it("renders with correct text and href attribute", () => {
    render(<NavLink href="/services">Services</NavLink>);
    const link = screen.getByRole("link", { name: /services/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/services");
  });

  it("applies active styles (text-black-700) when isActive is true", () => {
    render(
      <NavLink href="/blog" isActive>
        Blog
      </NavLink>,
    );
    const link = screen.getByRole("link");
    expect(link).toHaveClass("text-black-700");
  });

  it("applies hover brand color when isActive is false", () => {
    render(<NavLink href="/faculty">Faculty</NavLink>);
    const link = screen.getByRole("link");
    expect(link).toHaveClass("hover:text-brand-purple-1000");
  });

  it("merges custom className with base styles", () => {
    render(
      <NavLink href="/test" className="my-custom-style">
        Test
      </NavLink>,
    );
    const link = screen.getByRole("link");
    expect(link).toHaveClass("my-custom-style");
    // Ensure Base Padding / Font Styles are still present
    expect(link).toHaveClass("px-3", "py-2", "text-sm");
  });

  it("forwards additional anchor attributes correctly", () => {
    render(
      <NavLink href="/external" target="_blank" rel="noopener">
        External
      </NavLink>,
    );
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener");
  });
});
