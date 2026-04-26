import type { Meta, StoryObj } from "@storybook/react";
import StudentsVoice from "./page";

const meta = {
  title: "Pages/Blog/StudentsVoice",
  component: StudentsVoice,
  parameters: {
    // Sets the Story to take up the Full Screen, matching the Layout of the Page
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof StudentsVoice>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The Default View of the Students' Voice Page as it appears on Desktop.
 */
export const Default: Story = {};

/**
 * Mobile View Story to test the Grid Responsiveness.
 * This helps verify that the Testimonial Cards transition from a 3-column Layout to a Single Stacked Column for Mobile Users.
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
 */
export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};
