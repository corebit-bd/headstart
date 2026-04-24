import type { Meta, StoryObj } from "@storybook/react";
import FacultyList from "./page";

const meta = {
  title: "Pages/FacultyList",
  component: FacultyList,
  parameters: {
    // Sets the Story to take up the Full Screen, Matching your Hero Sample
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FacultyList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/**
 * Mobile View Story to test the Grid Responsiveness
 * (md:grid-cols-2 lg:grid-cols-3)
 */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
