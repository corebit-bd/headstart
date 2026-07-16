import type { Meta, StoryObj } from "@storybook/react";
import { BriefcaseIcon, BookOpenIcon, LightBulbIcon } from "./StudentSupportIcons";
import { SVGProps } from "react";

const IconsShowcase = (props: SVGProps<SVGSVGElement>) => {
  return (
    <div className="p-8 bg-brand-grey-50 rounded-2xl border border-brand-grey-1000 inline-block">
      <h3 className="font-heading text-lg font-bold text-brand-purple-1000 mb-6">
        Student Support Icons Kit
      </h3>
      <div className="flex items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <div className="p-3 bg-brand-purple-100 rounded-xl text-brand-purple-1000">
            <BriefcaseIcon className="h-8 w-8" {...props} />
          </div>
          <span className="font-body text-xs text-black-600 font-medium">BriefcaseIcon</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="p-3 bg-brand-purple-100 rounded-xl text-brand-purple-1000">
            <BookOpenIcon className="h-8 w-8" {...props} />
          </div>
          <span className="font-body text-xs text-black-600 font-medium">BookOpenIcon</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="p-3 bg-brand-purple-100 rounded-xl text-brand-purple-1000">
            <LightBulbIcon className="h-8 w-8" {...props} />
          </div>
          <span className="font-body text-xs text-black-600 font-medium">LightBulbIcon</span>
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof IconsShowcase> = {
  title: "Components/StudentSupportIcons",
  component: IconsShowcase,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    strokeWidth: {
      control: { type: "number" },
      defaultValue: 1.5,
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconsShowcase>;

export const Default: Story = {
  args: {
    strokeWidth: 1.5,
  },
};