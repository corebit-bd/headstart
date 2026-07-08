import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HomePage from "../page";

jest.mock("@/components/home/Hero", () => ({
  __esModule: true,
  default: () => <section data-testid="hero">Hero</section>,
}));

jest.mock("@/components/home/WhyHeadStart", () => ({
  __esModule: true,
  default: () => <section data-testid="why-headstart">Why HeadStart</section>,
}));

jest.mock("@/components/home/ACCAQualificationOverview", () => ({
  __esModule: true,
  default: () => <section data-testid="acca-overview">ACCA Overview</section>,
}));

jest.mock("@/components/home/FacultyPreview", () => ({
  __esModule: true,
  default: () => <section data-testid="faculty-preview">Faculty Preview</section>,
}));

jest.mock("@/components/home/StudentSuccess", () => ({
  __esModule: true,
  default: () => <section data-testid="student-success">Student Success</section>,
}));

jest.mock("@/components/home/Contact", () => ({
  __esModule: true,
  Contact: () => <section data-testid="contact">Contact</section>,
}));

describe("HomePage Component", () => {
  it("renders all home page sections successfully", () => {
    render(<HomePage />);

    expect(screen.getByTestId("hero")).toBeInTheDocument();
    expect(screen.getByTestId("why-headstart")).toBeInTheDocument();
    expect(screen.getByTestId("acca-overview")).toBeInTheDocument();
    expect(screen.getByTestId("faculty-preview")).toBeInTheDocument();
    expect(screen.getByTestId("student-success")).toBeInTheDocument();
    expect(screen.getByTestId("contact")).toBeInTheDocument();
  });
});