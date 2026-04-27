import type { Meta, StoryObj } from "@storybook/react";
import NewJoiners from "./page";

const meta = {
  title: "Pages/Blog/NewJoiners",
  component: NewJoiners,
  parameters: {
    // Sets the Story to take up the Full Screen, matching the Layout of the Page
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NewJoiners>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default view of the New Joiners page as it appears on Desktop.
 */
export const Default: Story = {};

/**
 * Mobile View Story to test the Grid Responsiveness.
 * This helps verify that the Joiner Cards transition from a 3-column layout
 * to a single stacked column for mobile users.
 */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

/**
 * Tablet View Story to verify the md:grid-cols-2 breakpoint.
 */
export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};
