import type { Meta, StoryObj } from "@storybook/react";
import ACCAChamps from "./page";

const meta = {
  title: "Pages/Blog/ACCAChamps",
  component: ACCAChamps,
  parameters: {
    // Sets the Story to take up the Full Screen, matching the Layout of the Page
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ACCAChamps>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The Default View of the ACCA Champs Page as it appears on Desktop.
 * Displays the Grid Layout for World-Class Achievers.
 */
export const Default: Story = {};

/**
 * Mobile View Story to test the Grid Responsiveness.
 * Verifies that the Grid transitions to a Single Column Stack for Smaller Screens.
 */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

/**
 * Tablet View Story to verify the sm:grid-cols-2 Breakpoint & Spacing.
 */
export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};
