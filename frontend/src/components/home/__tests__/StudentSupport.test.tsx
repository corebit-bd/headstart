import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import StudentSupport from "../StudentSupport";

describe("StudentSupport Component", () => {
  it("renders the section heading correctly", () => {
    render(<StudentSupport />);

    const heading = screen.getByRole("heading", {
      level: 2,
      name: /Supporting You at Every Step/i,
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass(
      "text-2xl",
      "font-bold",
      "text-black-900"
    );
    expect(heading).toHaveAttribute("id", "support-heading");
  });

  it("renders the section description text", () => {
    render(<StudentSupport />);

    const description = screen.getByText(
      /Our support system is designed to help students succeed/i
    );
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass("text-base", "text-black-800", "leading-relaxed");
  });

  it("applies the correct layout and background classes to the section", () => {
    const { container } = render(<StudentSupport />);
    const section = container.querySelector("section");

    expect(section).toBeInTheDocument();
    expect(section).toHaveClass("bg-brand-grey-1000", "py-[48px]", "text-[#0d0d0d]");
    expect(section).toHaveAttribute("aria-labelledby", "support-heading");
  });

  it("renders all three support value regions with correct tokens", () => {
    render(<StudentSupport />);

    const supportCards = [
      { name: "Career Support Card", heading: "Career Support" },
      { name: "Academic Resources Card", heading: "Academic Resources" },
      { name: "Knowledge Hub Card", heading: "Knowledge Hub" },
    ];

    supportCards.forEach(({ name, heading }) => {
      const region = screen.getByRole("region", { name });
      expect(region).toBeInTheDocument();
      expect(region).toHaveClass("bg-brand-grey-50", "border-brand-grey-600", "p-6", "rounded-lg");
      
      expect(
        screen.getByRole("heading", { level: 3, name: heading })
      ).toBeInTheDocument();
    });
  });

  it("verifies localized textual summaries are fully visible inside cards", () => {
    render(<StudentSupport />);

    expect(
      screen.getByText(/Guidance and resources to smoothly navigate your transition/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Comprehensive reference materials tailored specifically to maximize/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/An interactive environment for community collaboration/i)
    ).toBeInTheDocument();
  });
});