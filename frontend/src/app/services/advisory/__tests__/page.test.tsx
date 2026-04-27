import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AdvisoryPage from "../page";

describe("AdvisoryPage Component", () => {
  it("renders the Main Heading with correct Branding", () => {
    render(<AdvisoryPage />);

    // Check for the Main Heading Text
    expect(screen.getByText(/Professional/i)).toBeInTheDocument();

    // Verify the "Advisory" Span has the specific Brand Purple Color Class
    const advisorySpan = screen.getByText("Advisory");
    expect(advisorySpan).toHaveClass("text-brand-purple-1000");
  });

  it("renders the Strategic Consultancy Card with correct Background", () => {
    render(<AdvisoryPage />);

    // Check for the Sub-heading
    const subHeading = screen.getByRole("heading", {
      name: /Strategic Consultancy/i,
    });
    expect(subHeading).toBeInTheDocument();

    // Check the Parent Container for the specific Background & Border
    const cardContainer = subHeading.closest("div");
    expect(cardContainer).toHaveClass("bg-brand-purple-50");
    expect(cardContainer).toHaveClass("border-brand-purple-100");
  });

  it("renders the Service Description with correct Typography", () => {
    render(<AdvisoryPage />);

    const description = screen.getByText(
      /Providing a range of solutions such as Business Process Optimization/i,
    );
    expect(description).toBeInTheDocument();

    // Verify Typography Classes match the Source
    expect(description).toHaveClass("font-body");
    expect(description).toHaveClass("text-black-700");
  });

  it("renders the specific List Items for Financial & Risk Services", () => {
    render(<AdvisoryPage />);

    // Check for List Item Text
    expect(
      screen.getByText(/Financial Reporting & Compliance/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Risk Management Systems/i)).toBeInTheDocument();
  });

  it("applies the correct Gold Branding to List Decorators", () => {
    render(<AdvisoryPage />);

    // Select all Bullet Point Decorators by their Color Class
    const decorators = document.querySelectorAll(".bg-brand-gold-1000");

    // Expect exactly 2 Decorators based on the current List Length
    expect(decorators.length).toBe(2);
    decorators.forEach((dot) => {
      expect(dot).toHaveClass("h-2", "w-2", "rounded-full");
    });
  });
});
