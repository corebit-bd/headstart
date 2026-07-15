import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { AchievementCard } from "../AchievementCard";

const defaultProps = {
  title: "National Prize Winner",
  studentName: "Amina Rahman",
  score: "94%",
  paper: "PM — Performance Management",
  session: "Dec 2025 Session",
  imageUrl:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400",
};

describe("AchievementCard Component", () => {
  it("renders the student name as a heading", () => {
    render(<AchievementCard {...defaultProps} />);

    const heading = screen.getByRole("heading", {
      level: 3,
      name: defaultProps.studentName,
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("font-heading", "text-black-900");
  });

  it("renders the achievement title badge", () => {
    render(<AchievementCard {...defaultProps} />);

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });

  it("renders the ACCA achievement notice label", () => {
    render(<AchievementCard {...defaultProps} />);

    expect(screen.getByText("ACCA Achievement Notice")).toBeInTheDocument();
  });

  it("renders paper, result, and session details", () => {
    render(<AchievementCard {...defaultProps} />);

    expect(screen.getByText(/Paper:/i)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.paper)).toBeInTheDocument();
    expect(screen.getByText(/Result:/i)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.score)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.session)).toBeInTheDocument();
  });

  it("renders the image with descriptive alt text when imageUrl is provided", () => {
    render(<AchievementCard {...defaultProps} />);

    const image = screen.getByRole("img", {
      name: `Result confirmation highlight for ${defaultProps.studentName}`,
    });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", defaultProps.imageUrl);
    expect(image).toHaveAttribute("loading", "lazy");
  });

  it("does not render the image section when imageUrl is omitted", () => {
    const { imageUrl: _, ...propsWithoutImage } = defaultProps; // eslint-disable-line @typescript-eslint/no-unused-vars
    render(<AchievementCard {...propsWithoutImage} />);

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.getByText(defaultProps.studentName)).toBeInTheDocument();
  });

  it("applies card container styling", () => {
    const { container } = render(<AchievementCard {...defaultProps} />);
    const card = container.firstChild as HTMLElement;

    expect(card).toHaveClass(
      "bg-white",
      "border",
      "border-brand-grey-1000",
      "rounded-[8px]",
    );
  });
});
