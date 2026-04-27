import type { Meta, StoryObj } from "@storybook/react";
import TrainingsPage from "./page";

const meta = {
  title: "Pages/Services/Trainings",
  component: TrainingsPage,
  parameters: {
    // Sets the Story to take up the Full Screen, matching the Layout of the Page
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TrainingsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/**
 * Mobile View Story to test the Grid Responsiveness
 */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

/**
 * Tablet View Story to ensure the Grid Layouts Stack / Adjust correctly before reaching Desktop Width.
 */
export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};
