import type { Meta, StoryObj } from "@storybook/react";
import StudentSupport from "./StudentSupport";

const meta = {
  title: "Home/StudentSupport",
  component: StudentSupport,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof StudentSupport>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};