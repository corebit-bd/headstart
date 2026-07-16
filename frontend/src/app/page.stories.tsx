import type { Meta, StoryObj } from "@storybook/react";
import HomePage from "./page";

const meta = {
  title: "Pages/Home",
  component: HomePage,
  parameters: {
    // Standard for Page-Level Stories to remove Default Storybook Padding
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The Default View of the Home Page.
 * Rendering all Sections from Hero to Contact.
 */
export const Default: Story = {};

/**
 * Mobile Viewport Example
 * Useful for checking the Responsiveness of the Combined Sections.
 */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
