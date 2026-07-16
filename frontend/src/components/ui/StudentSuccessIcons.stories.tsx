import type { Meta, StoryObj } from "@storybook/react";
import {
  AwardIcon,
  CalendarIcon,
  CheckCircleIcon,
  TrendingUpIcon,
  UserIcon,
} from "./StudentSuccessIcons";

const meta = {
  title: "UI/StudentSuccessIcons",
  component: AwardIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "number", min: 12, max: 48, step: 4 },
      description: "Icon size in pixels",
    },
  },
} satisfies Meta<typeof AwardIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 24,
  },
};

export const AllIcons: Story = {
  args: {
    size: 24,
  },
  render: (args) => (
    <div className="flex flex-wrap items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <AwardIcon {...args} className="text-brand-gold-1000" />
        <span className="text-xs text-black-500">Award</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <CheckCircleIcon {...args} className="text-success-1000" />
        <span className="text-xs text-black-500">Check Circle</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <TrendingUpIcon {...args} className="text-info-1000" />
        <span className="text-xs text-black-500">Trending Up</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <CalendarIcon {...args} className="text-black-500" />
        <span className="text-xs text-black-500">Calendar</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <UserIcon {...args} className="text-brand-purple-1000" />
        <span className="text-xs text-black-500">User</span>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  args: {
    size: 24,
  },
  render: () => (
    <div className="flex items-end gap-6">
      <AwardIcon size={16} className="text-brand-purple-1000" />
      <AwardIcon size={20} className="text-brand-purple-1000" />
      <AwardIcon size={24} className="text-brand-purple-1000" />
      <AwardIcon size={32} className="text-brand-purple-1000" />
    </div>
  ),
};
