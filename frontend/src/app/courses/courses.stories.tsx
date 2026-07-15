import type { Meta, StoryObj } from "@storybook/react";
import CoursesPage from "./page";

const meta: Meta<typeof CoursesPage> = {
  title: "Pages/CoursesPage",
  component: CoursesPage,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof CoursesPage>;

export const Default: Story = {};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const TabletView: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};