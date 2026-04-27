import type { Meta, StoryObj } from "@storybook/react";
import EventsPage from "./page";

const meta = {
  title: "Pages/Blog/EventsPage",
  component: EventsPage,
  parameters: {
    // Sets the Story to take up the Full Screen, matching the Layout of the Page
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EventsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The Default View of the Events Page as it appears on Desktop.
 * Displays the Event Cards in a Single-Column Grid Layout with Full Width Constraints.
 */
export const Default: Story = {};

/**
 * Mobile View Story to test the Layout Responsiveness.
 * Verifies that the Container Padding & Font Sizes adjust correctly for Small Screens.
 */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

/**
 * Tablet View Story to verify the Layout on Medium-Sized Screens.
 * Ensures the max-width Containers & Horizontal Padding Function as intended.
 */
export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};
