import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HomePage from "../page";

// 1. Mocking Default Exports (Hero, About, Services, Blog)
jest.mock("@/components/home/Hero", () => ({
  __esModule: true,
  default: () => <section data-testid="hero">Hero</section>,
}));

jest.mock("@/components/home/About", () => ({
  __esModule: true,
  default: () => <section data-testid="about">About</section>,
}));

jest.mock("@/components/home/Services", () => ({
  __esModule: true,
  default: () => <section data-testid="services">Services</section>,
}));

jest.mock("@/components/home/Blog", () => ({
  __esModule: true,
  default: () => <section data-testid="blog">Blog</section>,
}));

// 2. Mocking Named Exports (Faculty, Contact)
// Note : We provide the Exact Name used in the Curly Braces
jest.mock("@/components/home/Faculty", () => ({
  __esModule: true,
  Faculty: () => <section data-testid="faculty">Faculty</section>,
}));

jest.mock("@/components/home/Contact", () => ({
  __esModule: true,
  Contact: () => <section data-testid="contact">Contact</section>,
}));

describe("HomePage Component", () => {
  it("renders all home page sections successfully", () => {
    render(<HomePage />);

    expect(screen.getByTestId("hero")).toBeInTheDocument();
    expect(screen.getByTestId("about")).toBeInTheDocument();
    expect(screen.getByTestId("services")).toBeInTheDocument();
    expect(screen.getByTestId("blog")).toBeInTheDocument();
    expect(screen.getByTestId("faculty")).toBeInTheDocument();
    expect(screen.getByTestId("contact")).toBeInTheDocument();
  });
});
