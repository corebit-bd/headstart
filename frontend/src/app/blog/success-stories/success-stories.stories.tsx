import type { Meta, StoryObj } from "@storybook/react";
import SuccessStories from "./page";

const meta = {
  title: "Pages/Blog/SuccessStories",
  component: SuccessStories,
  parameters: {
    // Sets the Story to take up the Full Screen, matching the Layout of the Page
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SuccessStories>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The Default View of the Success Stories Page as it appears on Desktop.
 */
export const Default: Story = {};

/**
 * Mobile View Story to test the Flex Responsiveness.
 * This helps verify that the Story Cards transition from a Row Layout (md:flex-row) to a Column Stacked Layout (flex-col) for Mobile Users.
 */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

/**
 * Tablet View Story to verify the md:flex-row Breakpoint & Spacing.
 */
export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};
