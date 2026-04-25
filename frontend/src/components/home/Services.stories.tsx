import type { Meta, StoryObj } from "@storybook/react";
import Services from "./Services";

const meta = {
  title: "Home/Services",
  component: Services,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Services>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
