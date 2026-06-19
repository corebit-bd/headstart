import type { Meta, StoryObj } from "@storybook/react";
import WhyHeadStart from "./WhyHeadStart";

const meta = {
  title: "Home/WhyHeadStart",
  component: WhyHeadStart,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof WhyHeadStart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};