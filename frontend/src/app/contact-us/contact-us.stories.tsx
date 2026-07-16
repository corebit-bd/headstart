import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ContactUsPage from "./page";

const meta: Meta<typeof ContactUsPage> = {
  title: "Pages/ContactUsPage",
  component: ContactUsPage,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContactUsPage>;

export const Default: Story = {
  render: () => <ContactUsPage />,
};