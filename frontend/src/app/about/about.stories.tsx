import type { Meta, StoryObj } from "@storybook/react";
import AboutPage from "./page";

const meta = {
  title: "Pages/AboutPage",
  component: AboutPage,
  parameters: {
    // Sets the Story to take up the Full Screen, matching the Layout of the Page
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/**
 * Mobile View Story to test the Grid Responsiveness
 * This helps verify the "Mission & Vision" & "Dual-Wing" Grid Transitions from Single Column to md:grid-cols-2.
 */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
