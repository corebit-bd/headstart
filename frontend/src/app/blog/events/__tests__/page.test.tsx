import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import EventsPage from "../page";

describe("EventsPage Component", () => {
  it("renders the Header Section with correct Branding & Content", () => {
    render(<EventsPage />);

    // Check Main Heading
    const heading = screen.getByRole("heading", { name: /Events/i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass(
      "font-heading",
      "text-4xl",
      "font-bold",
      "text-black-900",
    );

    // Check Background Wrapper (The Top-Level div with the Grey Background)
    // We navigate up : heading -> container div -> outer wrapper div
    const outerWrapper = heading.closest("div")?.parentElement;
    expect(outerWrapper).toHaveClass("bg-brand-grey-50", "min-h-screen");
  });

  it("renders the Event Card with correct Data & Styling", () => {
    render(<EventsPage />);

    // Check Event Title
    const eventTitle = screen.getByRole("heading", {
      name: /Ethics in Modern Advisory Workshop/i,
      level: 3,
    });
    expect(eventTitle).toBeInTheDocument();
    expect(eventTitle).toHaveClass("font-heading", "text-xl", "font-medium");

    // Check Date Label
    const dateLabel = screen.getByText(/APR 15, 2026/i);
    expect(dateLabel).toHaveClass(
      "font-body",
      "text-brand-purple-1000",
      "font-bold",
    );
  });

  it("validates the Event Card Container Branding & Shadow", () => {
    render(<EventsPage />);

    const eventTitle = screen.getByText(/Ethics in Modern Advisory Workshop/i);
    // Navigate to the Card Container
    const cardContainer = eventTitle.closest(".bg-white");

    // Validate the specific Purple Left Border & White Background
    expect(cardContainer).toHaveClass(
      "bg-white",
      "p-6",
      "rounded-xl",
      "border-l-8",
      "border-brand-purple-1000",
      "shadow-sm",
    );
  });

  it("renders the Registration Button with correct Branding", () => {
    render(<EventsPage />);

    const registerButton = screen.getByRole("button", { name: /Register/i });
    expect(registerButton).toBeInTheDocument();
    expect(registerButton).toHaveClass(
      "rounded-md",
      "bg-brand-gold-1000",
      "px-6",
      "py-2",
      "font-heading",
      "font-bold",
      "text-black-900",
    );
  });

  it("verifies the Grid Layout Container", () => {
    render(<EventsPage />);

    const eventTitle = screen.getByText(/Ethics in Modern Advisory Workshop/i);
    // Find the immediate Grid Parent
    const gridContainer = eventTitle.closest(".grid");

    expect(gridContainer).toHaveClass("mt-12", "grid", "gap-6");
  });
});
