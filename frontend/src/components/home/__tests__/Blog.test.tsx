import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Blog from "../Blog";

describe("Blog Component", () => {
  it("renders the Section Heading correctly", () => {
    render(<Blog />);

    const heading = screen.getByRole("heading", {
      level: 2,
      name: /Latest from HeadStart/i,
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("font-heading", "text-3xl", "font-bold");
  });

  it("renders the 'View All Blog' Button with correct Styling", () => {
    render(<Blog />);

    const button = screen.getByRole("button", { name: /View All Blog →/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "text-brand-purple-1000",
      "font-heading",
      "font-medium",
    );
  });

  it("renders all 3 Blog Cards", () => {
    render(<Blog />);

    const blogTitles = ["Students' Voice", "ACCA Champs", "Success Stories"];

    blogTitles.forEach((title) => {
      const blogHeading = screen.getByRole("heading", {
        level: 3,
        name: title,
      });
      expect(blogHeading).toBeInTheDocument();
      expect(blogHeading).toHaveClass("font-heading", "text-xl", "font-medium");
    });
  });

  it("renders Blog Descriptions with correct Styling", () => {
    render(<Blog />);

    const descriptions = screen.getAllByText(
      /Inspiring tales from the HeadStart community/i,
    );

    expect(descriptions).toHaveLength(3);
    descriptions.forEach((description) => {
      expect(description).toBeInTheDocument();
      expect(description).toHaveClass("font-body", "text-sm", "text-black-500");
    });
  });

  it("applies the correct Layout & Background Classes to the Section", () => {
    const { container } = render(<Blog />);
    const section = container.querySelector("section");

    expect(section).toHaveClass("py-24", "bg-white");
  });

  it("verifies the Card Container has Hover & Transition Styles", () => {
    render(<Blog />);

    // Target the Image Container for the First Blog Post
    const firstTitle = screen.getByText("Students' Voice");
    const cardContainer = firstTitle.closest("div.group");
    const imageContainer = cardContainer?.querySelector(".aspect-video");

    expect(cardContainer).toHaveClass("group", "cursor-pointer");
    expect(imageContainer).toHaveClass(
      "rounded-lg",
      "bg-brand-grey-1000",
      "overflow-hidden",
    );
  });
});
