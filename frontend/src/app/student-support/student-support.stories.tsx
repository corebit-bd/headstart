import type { Meta, StoryObj } from "@storybook/react";
import StudentSupportPage from "../page";

const meta: Meta<typeof StudentSupportPage> = {
  title: "Pages/StudentSupportPage",
  component: StudentSupportPage,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof StudentSupportPage>;

export const Default: Story = {};