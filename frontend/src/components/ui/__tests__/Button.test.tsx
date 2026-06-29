import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../Button";

describe("Button Component", () => {
  describe("Rendering", () => {
    it("Renders Button with Text", () => {
      render(<Button>Click Me</Button>);
      expect(
        screen.getByRole("button", { name: /click me/i }),
      ).toBeInTheDocument();
    });

    it("Renders Button with Custom ClassName", () => {
      render(<Button className="custom-class">Click me</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("custom-class");
    });
  });

  describe("Variants", () => {
    it("Renders Primary Variant By Default", () => {
      render(<Button>Primary</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("bg-brand-purple-1000");
    });

    it("Renders Secondary Variant Correctly", () => {
      render(<Button variant="secondary">Secondary</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("bg-brand-gold-1000");
    });

    it("Renders Outline Variant Correctly", () => {
      render(<Button variant="outline">Outline</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("border-brand-purple-1000");
    });

    it("Renders Tertiary Variant Correctly", () => {
      render(<Button variant="tertiary">Tertiary</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("bg-brand-grey-1000");
    });

    it("Renders Danger Variant Correctly", () => {
      render(<Button variant="danger">Danger</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("bg-error-1000");
    });
  });

  describe("Sizes", () => {
    it("Renders Medium Size By Default", () => {
      render(<Button>Medium</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("h-10");
    });

    it("Renders Small Size Correctly", () => {
      render(<Button size="sm">Small</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("h-9");
    });

    it("Renders Large Size Correctly", () => {
      render(<Button size="lg">Large</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("h-11");
    });
  });

  describe("Interactions", () => {
    it("Calls 'onClick' when Clicked", () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Click Me</Button>);
      fireEvent.click(screen.getByRole("button"));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("Does Not Call 'onClick' When Disabled", () => {
      const handleClick = jest.fn();
      render(
        <Button onClick={handleClick} disabled>
          Click Me
        </Button>,
      );
      fireEvent.click(screen.getByRole("button"));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });
});
