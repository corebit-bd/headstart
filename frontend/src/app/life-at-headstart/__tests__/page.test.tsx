// frontend/src/app/life-at-headstart/__tests__/page.test.tsx
import "@testing-library/jest-dom";
import { render, screen, fireEvent, within } from "@testing-library/react";
import LifeAtHeadStartPage from "../page";

// Mock Next.js Link component to keep tests clean and focus assertions on props/attributes
jest.mock("next/link", () => {
    return ({ children, href, ...props }: React.ComponentPropsWithoutRef<"a">) => {
      return (
        <a href={href} {...props}>
          {children}
        </a>
      );
    };
  });

describe("LifeAtHeadStartPage Component", () => {
  const WHATSAPP_URL = "https://wa.me/8801886091323";

  // Utility to test that CTA buttons are correctly duplicated and active in a specific container
  const assertActionButtonsExist = (container: HTMLElement) => {
    const applyBtn = within(container).getByRole("link", { name: /Apply Now/i });
    const consultBtn = within(container).getByRole("link", { name: /Book Free Consultation/i });

    expect(applyBtn).toBeInTheDocument();
    expect(applyBtn).toHaveAttribute("href", "/enroll");

    expect(consultBtn).toBeInTheDocument();
    expect(consultBtn).toHaveAttribute("href", WHATSAPP_URL);
    expect(consultBtn).toHaveAttribute("target", "_blank");
    expect(consultBtn).toHaveAttribute("rel", "noopener noreferrer");
  };

  it("renders the Hero section with appropriate layout copy and styles", () => {
    render(<LifeAtHeadStartPage />);

    const heading = screen.getByRole("heading", { name: /Life at HeadStart/i, level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("font-heading", "text-5xl");

    expect(
      screen.getByText(/Experience an Active, Community-Driven Journey to Becoming an Elite Professional/i)
    ).toBeInTheDocument();

    const heroSection = heading.closest("section");
    expect(heroSection).toHaveClass("bg-brand-gold-1000", "text-brand-purple-1000");
  });

  it("provisions all 6 structural Tab elements", () => {
    render(<LifeAtHeadStartPage />);

    expect(screen.getByRole("button", { name: /Our Exam Results/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /ACCA Member & Student Connect/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Career Counselling Sessions/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Training Sessions/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Extra Curricular Activities/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Upcoming Events/i })).toBeInTheDocument();
  });

  it("renders the 'Our Exam Results' tab by default with CTAs", () => {
    const { container } = render(<LifeAtHeadStartPage />);

    expect(
      screen.getByRole("heading", { name: /Championship in Academic Performance/i, level: 3 })
    ).toBeInTheDocument();

    expect(screen.getByText("Tanzim Rahman")).toBeInTheDocument();
    expect(screen.getByText("Marks: 88%")).toBeInTheDocument();
    expect(screen.getByText("Nabila Karim")).toBeInTheDocument();
    expect(screen.getByText("Marks: 85%")).toBeInTheDocument();
    expect(screen.getByText("Fahim Shahriar")).toBeInTheDocument();
    expect(screen.getByText("Marks: 82%")).toBeInTheDocument();

    // Verify CTAs in active tab panel
    assertActionButtonsExist(container);
  });

  it("switches context to 'ACCA Member & Student Connect' with active CTAs", () => {
    const { container } = render(<LifeAtHeadStartPage />);

    const tabBtn = screen.getByRole("button", { name: /ACCA Member & Student Connect/i });
    fireEvent.click(tabBtn);

    expect(
      screen.getByRole("heading", { name: /Connecting Ambition with Expertise/i, level: 3 })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Alumni Corporate Roundtables/i, level: 4 })).toBeInTheDocument();
    expect(screen.getByText(/We bridge the gap between hard theory/i)).toBeInTheDocument();

    assertActionButtonsExist(container);
  });

  it("switches context to 'Career Counselling Sessions' with active CTAs", () => {
    const { container } = render(<LifeAtHeadStartPage />);

    const tabBtn = screen.getByRole("button", { name: /Career Counselling Sessions/i });
    fireEvent.click(tabBtn);

    expect(
      screen.getByRole("heading", { name: /Guiding Your Future Path/i, level: 3 })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Local Growth Portals/i, level: 4 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Global Portability Guidance/i, level: 4 })).toBeInTheDocument();

    assertActionButtonsExist(container);
  });

  it("switches context to 'Training Sessions' with active CTAs", () => {
    const { container } = render(<LifeAtHeadStartPage />);

    const tabBtn = screen.getByRole("button", { name: /Training Sessions/i });
    fireEvent.click(tabBtn);

    expect(
      screen.getByRole("heading", { name: /Beyond Technical Competency/i, level: 3 })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Executive Communication/i, level: 4 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Interview Etiquette/i, level: 4 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Personality Alignment/i, level: 4 })).toBeInTheDocument();

    assertActionButtonsExist(container);
  });

  it("switches context to 'Extra Curricular Activities' with active CTAs", () => {
    const { container } = render(<LifeAtHeadStartPage />);

    const tabBtn = screen.getByRole("button", { name: /Extra Curricular Activities/i });
    fireEvent.click(tabBtn);

    expect(
      screen.getByRole("heading", { name: /Vibrant Campus Culture/i, level: 3 })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /ACCA Cricket Carnival/i, level: 4 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Student Activities/i, level: 4 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Campus Interactions/i, level: 4 })).toBeInTheDocument();

    assertActionButtonsExist(container);
  });

  it("switches context to 'Upcoming Events' and displays structured events alongside CTAs", () => {
    const { container } = render(<LifeAtHeadStartPage />);

    const tabBtn = screen.getByRole("button", { name: /Upcoming Events/i });
    fireEvent.click(tabBtn);

    expect(
      screen.getByRole("heading", { name: /Mark Your Calendar/i, level: 3 })
    ).toBeInTheDocument();

    // Confirm that simulated items render fully
    expect(screen.getByRole("heading", { name: "ACCA Pathway Seminar 2026", level: 4 })).toBeInTheDocument();
    expect(screen.getByText("Time: 4:00 PM - 6:00 PM")).toBeInTheDocument();

    expect(screen.getByRole("heading", { name: "Excel Corporate Modeling Bootcamp", level: 4 })).toBeInTheDocument();
    expect(screen.getByText("Time: 10:00 AM - 3:00 PM")).toBeInTheDocument();

    assertActionButtonsExist(container);
  });
});