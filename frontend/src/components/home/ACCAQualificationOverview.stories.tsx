import type { Meta, StoryObj } from "@storybook/react";
import ACCAQualificationOverview from "./ACCAQualificationOverview";

const meta = {
  title: "Home/ACCAQualificationOverview",
  component: ACCAQualificationOverview,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ACCAQualificationOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
