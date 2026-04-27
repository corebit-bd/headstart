import type { Meta, StoryObj } from "@storybook/react";
import AdvisoryPage from "./page";

const meta = {
  title: "Pages/Services/Advisory",
  component: AdvisoryPage,
  parameters: {
    // Sets the Story to take up the Full Screen, matching the Layout of the Page
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AdvisoryPage>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default Desktop View for the Advisory Page.
 */
export const Default: Story = {};

/**
 * Mobile View Story to test the Padding & Font Scaling Responsiveness.
 */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

/**
 * Tablet View Story to ensure the Container & rounded-3xl Cards adjust correctly.
 */
export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};
