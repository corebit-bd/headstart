import type { Meta, StoryObj } from "@storybook/react";
import ContactPage from "./page";

const meta = {
  title: "Pages/ContactPage",
  component: ContactPage,
  parameters: {
    // Sets the Story to take up the Full Screen, matching the Layout of your other Page Stories
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ContactPage>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default View of the Contact Page containing the Inquiry Form.
 */
export const Default: Story = {};

/**
 * Mobile View Story to test Form Responsiveness & Padding on Smaller Devices.
 */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
