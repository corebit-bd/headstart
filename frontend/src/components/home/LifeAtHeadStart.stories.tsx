import type { Meta, StoryObj } from "@storybook/react";
import LifeAtHeadStart from "./LifeAtHeadStart";

const meta = {
  title: "Home/LifeAtHeadStart",
  component: LifeAtHeadStart,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LifeAtHeadStart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
