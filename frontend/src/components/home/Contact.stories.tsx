import type { Meta, StoryObj } from "@storybook/react";
import { Contact } from "./Contact";

const meta = {
  title: "Home/Contact",
  component: Contact,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Contact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
