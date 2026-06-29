import type { Meta, StoryObj } from "@storybook/react";
import BlogHub from "./page";

const meta = {
  title: "Pages/Blog/BlogHub",
  component: BlogHub,
  parameters: {
    // Sets the Story to take up the Full Screen, matching the Layout of the Page
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BlogHub>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The Default View of the Blog Hub Page as it appears on Desktop.
 * Displays the Grid of Categories (ACCA Champs, Success Stories, etc.) in a 3-Column Layout.
 */
export const Default: Story = {};

/**
 * Mobile View Story to test the Grid Responsiveness.
 * Verifies that the Category Cards stack vertically for Mobile Users.
 */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

/**
 * Tablet View Story to verify the md:grid-cols-2 Breakpoint.
 * Ensures the Layout shifts correctly to 2 Columns for Medium Screens.
 */
export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};
