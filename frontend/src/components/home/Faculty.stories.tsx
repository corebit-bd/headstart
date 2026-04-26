import type { Meta, StoryObj } from "@storybook/react";
import { Faculty } from "./Faculty";

const meta = {
  title: "Home/Faculty",
  component: Faculty,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Faculty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
