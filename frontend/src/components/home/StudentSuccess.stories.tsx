import type { Meta, StoryObj } from "@storybook/react";
import StudentSuccess from "./StudentSuccess";

const meta = {
  title: "Home/StudentSuccess",
  component: StudentSuccess,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof StudentSuccess>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
