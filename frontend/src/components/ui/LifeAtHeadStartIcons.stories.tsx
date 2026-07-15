// frontend/src/components/ui/__stories__/LifeAtHeadStartIcons.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { TrophyIcon, CalendarIcon } from "./LifeAtHeadStartIcons";
import { ComponentProps } from "react";

const meta: Meta = {
  title: "Components/LifeAtHeadStartIcons",
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Default: StoryObj<{ className?: string } & ComponentProps<"svg">> = {
  render: (args) => (
    <div className="flex gap-8 p-6 bg-brand-grey-50 rounded-lg">
      <div className="flex flex-col items-center gap-2">
        <TrophyIcon className="h-8 w-8 text-brand-purple-1000" {...args} />
        <span className="text-xs font-mono text-black-500">TrophyIcon</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <CalendarIcon className="h-8 w-8 text-brand-purple-1000" {...args} />
        <span className="text-xs font-mono text-black-500">CalendarIcon</span>
      </div>
    </div>
  ),
  args: {
    className: "h-12 w-12 text-brand-purple-1000",
  },
};