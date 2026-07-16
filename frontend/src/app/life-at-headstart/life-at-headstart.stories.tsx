// frontend/src/app/life-at-headstart/__stories__/page.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import LifeAtHeadStartPage from "../page";

const meta: Meta<typeof LifeAtHeadStartPage> = {
  title: "Pages/LifeAtHeadStartPage",
  component: LifeAtHeadStartPage,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof LifeAtHeadStartPage>;

export const Default: Story = {};