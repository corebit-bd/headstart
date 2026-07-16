import type { Meta, StoryObj } from "@storybook/react";
import FacultyPreview from "./FacultyPreview";

const meta = {
  title: "Home/FacultyPreview",
  component: FacultyPreview,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FacultyPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
