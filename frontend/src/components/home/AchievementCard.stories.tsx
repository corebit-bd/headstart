import type { Meta, StoryObj } from "@storybook/react";
import { AchievementCard } from "./AchievementCard";

const meta = {
  title: "Home/AchievementCard",
  component: AchievementCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    studentName: { control: "text" },
    score: { control: "text" },
    paper: { control: "text" },
    session: { control: "text" },
    imageUrl: { control: "text" },
  },
} satisfies Meta<typeof AchievementCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "National Prize Winner",
    studentName: "Amina Rahman",
    score: "94%",
    paper: "PM — Performance Management",
    session: "Dec 2025 Session",
    imageUrl:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-sm">
        <Story />
      </div>
    ),
  ],
};

export const TopAffiliate: Story = {
  args: {
    title: "Top Affiliate",
    studentName: "Zayan Ahmed",
    score: "Passed First Attempt",
    paper: "Strategic Professional Level",
    session: "March 2026 Session",
    imageUrl:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-sm">
        <Story />
      </div>
    ),
  ],
};

export const WithoutImage: Story = {
  args: {
    title: "Global Rank Holder",
    studentName: "Sania Mirza",
    score: "91%",
    paper: "FM — Financial Management",
    session: "Dec 2025 Session",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-sm">
        <Story />
      </div>
    ),
  ],
};
