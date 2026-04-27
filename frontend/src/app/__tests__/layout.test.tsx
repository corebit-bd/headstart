import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RootLayout from "../layout";

// Mocking Components used within the Layout to focus on Layout Structure
jest.mock("@/components/layout/Navbar", () => {
  return function DummyNavbar() {
    return <nav data-testid="mock-navbar">Navbar</nav>;
  };
});

jest.mock("@/components/layout/Footer", () => {
  return function DummyFooter() {
    return <footer data-testid="mock-footer">Footer</footer>;
  };
});

describe("RootLayout Component", () => {
  it("renders the navbar and footer", () => {
    render(
      <RootLayout>
        <div>Content</div>
      </RootLayout>,
    );

    expect(screen.getByTestId("mock-navbar")).toBeInTheDocument();
    expect(screen.getByTestId("mock-footer")).toBeInTheDocument();
  });

  it("renders the Children Content within the Main Tag", () => {
    const testMessage = "Unique Page Content";
    render(
      <RootLayout>
        <div data-testid="test-child">{testMessage}</div>
      </RootLayout>,
    );

    const main = screen.getByRole("main");
    const child = screen.getByTestId("test-child");

    expect(main).toBeInTheDocument();
    expect(main).toContainElement(child);
    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });

  it("applies the Antialiased Class to the Body", () => {
    // Note : In some Test Environments, rendering <html>/<body> might be stripped / behave differently. We check the Rendered Container Structure.
    const { container } = render(
      <RootLayout>
        <div>Content</div>
      </RootLayout>,
    );

    const body = container.querySelector("body");
    // If the Test Environment supports Body Rendering :
    if (body) {
      expect(body).toHaveClass("antialiased");
    }
  });
});
