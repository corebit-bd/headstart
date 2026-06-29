import type { Meta, StoryObj } from "@storybook/react";
import Blog from "./Blog";

const meta = {
  title: "Home/Blog",
  component: Blog,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Blog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
