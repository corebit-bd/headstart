// frontend/src/components/ui/__tests__/Tabs.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // Ensures .toBeInTheDocument() and .toHaveClass() matchers work
import { Tabs } from "../Tabs";
import { Tab } from "@/types/nav";

const mockTabs: Tab[] = [
  { id: "tab1", label: "Tab 1", content: <div data-testid="content-1">Content One</div> },
  { id: "tab2", label: "Tab 2", content: <div data-testid="content-2">Content Two</div> },
  { id: "tab3", label: "Tab 3", content: <div data-testid="content-3">Content Three</div> },
];

describe("Tabs Component", () => {
  it("renders all tab headers and the default active content", () => {
    render(<Tabs tabs={mockTabs} />);

    // Check headers are present
    expect(screen.getByRole("button", { name: "Tab 1" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Tab 2" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Tab 3" })).toBeInTheDocument();

    // First tab content should be visible by default
    expect(screen.getByTestId("content-1")).toBeInTheDocument();
    expect(screen.queryByTestId("content-2")).not.toBeInTheDocument();
  });

  it("respects the defaultValue prop if provided", () => {
    render(<Tabs tabs={mockTabs} defaultValue="tab2" />);

    // Second tab content should be visible immediately
    expect(screen.getByTestId("content-2")).toBeInTheDocument();
    expect(screen.queryByTestId("content-1")).not.toBeInTheDocument();
  });

  it("switches content when a non-active tab header is clicked", () => {
    render(<Tabs tabs={mockTabs} />);

    // Initial state check
    expect(screen.getByTestId("content-1")).toBeInTheDocument();

    // Click tab 3
    fireEvent.click(screen.getByRole("button", { name: "Tab 3" }));

    // UI state change check
    expect(screen.getByTestId("content-3")).toBeInTheDocument();
    expect(screen.queryByTestId("content-1")).not.toBeInTheDocument();
  });

  it("applies correct active styling classes to the active tab trigger", () => {
    render(<Tabs tabs={mockTabs} />);

    const firstTabButton = screen.getByRole("button", { name: "Tab 1" });
    const secondTabButton = screen.getByRole("button", { name: "Tab 2" });

    // Check explicit active vs inactive classes
    expect(firstTabButton).toHaveClass("border-brand-purple-1000");
    expect(firstTabButton).toHaveClass("text-brand-purple-1000");
    
    expect(secondTabButton).toHaveClass("border-transparent");
    expect(secondTabButton).toHaveClass("text-black-500");
  });
});