import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ACCAChamps from "../page";

describe("ACCAChamps Component", () => {
  it("renders the Header Section with correct Branding & Content", () => {
    render(<ACCAChamps />);

    // Check Main Heading
    const heading = screen.getByRole("heading", { name: /ACCA Champs/i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass(
      "font-heading",
      "text-4xl",
      "font-bold",
      "text-brand-purple-1000"
    );

    // Check Background Wrapper
    const wrapper = heading.closest("div")?.parentElement;
    expect(wrapper).toHaveClass("bg-white", "min-h-screen");
  });

  it("renders the correct number of Champ Cards", () => {
    render(<ACCAChamps />);

    // Based on the [1, 2, 3].map Logic in page.tsx
    const champHeadings = screen.getAllByRole("heading", {
      name: /Champ Name/i,
      level: 3,
    });
    expect(champHeadings).toHaveLength(3);
  });

  it("applies the Correct Global Rank Labels & Styling to the Cards", () => {
    render(<ACCAChamps />);

    // Verify Rank labels exist
    const labels = screen.getAllByText(/Global Rank: #1/i);
    expect(labels).toHaveLength(3);

    // Validate Branding Classes (purple, semi-bold)
    labels.forEach((label) => {
      expect(label).toHaveClass(
        "text-brand-purple-900",
        "font-body",
        "text-sm",
        "font-semibold"
      );
    });
  });

  it("renders Champ Images with correct Placeholders & Colors", () => {
    render(<ACCAChamps />);

    const visuals = screen.getAllByText(/Champ Image/i);
    expect(visuals).toHaveLength(3);

    visuals.forEach((visual) => {
      expect(visual).toHaveClass(
        "font-heading",
        "text-brand-gold-1000",
        "font-bold"
      );

      const container = visual.parentElement;
      expect(container).toHaveClass(
        "aspect-square",
        "bg-brand-gold-50",
        "rounded-xl"
      );
    });
  });

  it("verifies the Grid Container Styling", () => {
    render(<ACCAChamps />);

    // Find the Grid Container (Parent of the first card)
    const firstChamp = screen.getByText("Champ Name 1").closest("div");
    const gridContainer = firstChamp?.parentElement;

    expect(gridContainer).toHaveClass(
      "mt-12",
      "grid",
      "sm:grid-cols-2",
      "lg:grid-cols-3",
      "gap-8"
    );
  });
});