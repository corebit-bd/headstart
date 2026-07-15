import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LifeAtHeadStart from "../LifeAtHeadStart"; // Adjust the relative path as needed

describe("LifeAtHeadStart Component", () => {
  it("renders the main section heading with correct styling", () => {
    render(<LifeAtHeadStart />);
    
    const heading = screen.getByRole("heading", { level: 2, name: /Life Beyond the Classroom/i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("font-heading text-3xl font-bold text-black-900");
  });

  it("renders the introductory paragraph with correct styling", () => {
    render(<LifeAtHeadStart />);
    
    const paragraph = screen.getByText(/At HeadStart, learning goes beyond textbooks/i);
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveClass("mt-6 font-body text-lg text-black-600");
  });
});