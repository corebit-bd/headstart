import "@testing-library/jest-dom";
import { render, screen, fireEvent, within } from "@testing-library/react";
import AboutPage from "../page";

// Mock Next.js Link component
jest.mock("next/link", () => {
  return ({
    children,
    href,
    className,
  }: {
    children: React.ReactNode;
    href: string;
    className?: string;
  }) => {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  };
});

// Mocking the FacultyList component using the correct default export structure
jest.mock("../../faculty/page", () => {
  return {
    __esModule: true,
    default: function MockFacultyList() {
      return (
        <div data-testid="faculty-list">
          <div>Dr. Ariful Haque</div>
          <div>Sarah J. Miller</div>
          <div>Tanvir Rahman</div>
        </div>
      );
    },
  };
});

// Mocking the ACCAChamps component using the correct default export structure
jest.mock("../../blog/acca-champs/page", () => {
  return {
    __esModule: true,
    default: function MockACCAChamps() {
      return (
        <div data-testid="acca-champs">
          <h1>ACCA Champs</h1>
          <p>Celebrating our world-class achievers and top scorers</p>
        </div>
      );
    },
  };
});

describe("AboutPage Component", () => {
  it("renders the Hero Section with correct Branding & Heading", () => {
    render(<AboutPage />);

    const heading = screen.getByRole("heading", { name: /About HeadStart/i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("font-heading", "text-5xl", "font-bold");

    const heroSection = heading.closest("section");
    expect(heroSection).toHaveClass("bg-brand-gold-1000", "py-24");
  });

  it("renders all Tab trigger buttons in the container", () => {
    render(<AboutPage />);

    expect(screen.getByRole("button", { name: /Introduction/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Mission & Vision/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Key Differentiators/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Our Faculty/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /National Prize-Winners/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Our Alumni/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Accreditations/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Our Partnerships/i })).toBeInTheDocument();
  });

  it("contains the correct Foundational Text about HeadStart's History inside the default tab", () => {
    render(<AboutPage />);

    expect(
      screen.getByText(/founded in 2020 with a clear vision/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/HeadStart offers students a learning environment/i)
    ).toBeInTheDocument();
  });

  it("switches content to display the Mission & Vision Section when its tab is clicked", () => {
    render(<AboutPage />);

    const tabButton = screen.getByRole("button", { name: /Mission & Vision/i });
    fireEvent.click(tabButton);

    expect(screen.getByRole("heading", { name: /Our Mission/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Our Vision/i, level: 3 })).toBeInTheDocument();

    expect(
      screen.getByText(/deliver a high-quality ACCA learning experience/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/To be recognized as one of the most trusted and forward-thinking ACCA learning partners in Bangladesh/i)
    ).toBeInTheDocument();
  });

  it("verifies formatting border accent accents are present inside the Mission & Vision pane", () => {
    render(<AboutPage />);

    fireEvent.click(screen.getByRole("button", { name: /Mission & Vision/i }));

    const missionHeading = screen.getByRole("heading", { name: /Our Mission/i });
    const visionHeading = screen.getByRole("heading", { name: /Our Vision/i });

    expect(missionHeading.parentElement).toHaveClass("border-l-4", "border-brand-purple-1000");
    expect(visionHeading.parentElement).toHaveClass("border-l-4", "border-brand-gold-1000");
  });

  it("switches content to display the Key Differentiators section when its tab is clicked", () => {
    render(<AboutPage />);

    fireEvent.click(screen.getByRole("button", { name: /Key Differentiators/i }));

    expect(
      screen.getByRole("heading", { level: 2, name: /What Makes HeadStart Different\?/i })
    ).toBeInTheDocument();
    expect(screen.getByText("Academic + Advisory Integration")).toBeInTheDocument();
    expect(screen.getByText("Result-Driven Approach")).toBeInTheDocument();
  });

  it("switches content to display the Our Faculty section when its tab is clicked", () => {
    render(<AboutPage />);

    fireEvent.click(screen.getByRole("button", { name: /Our Faculty/i }));

    const heading = screen.getByRole("heading", {
      level: 1,
      name: /Meet Our Faculty/i,
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass(
      "font-heading",
      "text-4xl",
      "font-bold",
      "text-black-900",
    );

    expect(within(heading).getByText("Faculty")).toHaveClass(
      "text-brand-purple-1000",
    );

    expect(
      screen.getByText(
        /Our faculty includes highly qualified ACCA professionals/i,
      ),
    ).toBeInTheDocument();

    expect(screen.getByText("Dr. Ariful Haque")).toBeInTheDocument();
    expect(screen.getByText("Sarah J. Miller")).toBeInTheDocument();
    expect(screen.getByText("Tanvir Rahman")).toBeInTheDocument();
  });

  it("switches content to display ACCA Champs when the National Prize-Winners tab is clicked", () => {
    render(<AboutPage />);

    fireEvent.click(screen.getByRole("button", { name: /National Prize-Winners/i }));

    expect(
      screen.getByRole("heading", { level: 1, name: /ACCA Champs/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Celebrating our world-class achievers and top scorers/i),
    ).toBeInTheDocument();
  });
});