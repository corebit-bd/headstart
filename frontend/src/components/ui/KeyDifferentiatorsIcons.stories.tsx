import type { Meta, StoryObj } from "@storybook/react";
import {
  IntegrationIcon,
  ResultIcon,
  FacultyIcon,
  MentorshipIcon,
  CareerIcon,
  SupportIcon,
  IconProps
} from "./KeyDifferentiatorsIcons";

const meta: Meta<IconProps> = {
  title: "Components/Icons/KeyDifferentiatorsIcons",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "number" },
      description: "Dimensions of the square SVG viewport",
    },
    className: {
      control: { type: "text" },
      description: "Additional Tailwind utility classes",
    },
  },
};

export default meta;

export const Gallery: StoryObj<IconProps> = {
  args: {
    size: 24,
    className: "text-brand-purple-1000",
  },
  render: (args) => {
    const iconCollection = [
      { name: "IntegrationIcon", Component: IntegrationIcon },
      { name: "ResultIcon", Component: ResultIcon },
      { name: "FacultyIcon", Component: FacultyIcon },
      { name: "MentorshipIcon", Component: MentorshipIcon },
      { name: "CareerIcon", Component: CareerIcon },
      { name: "SupportIcon", Component: SupportIcon },
    ];

    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 p-6 bg-brand-grey-50 rounded-xl border border-black-100">
        {iconCollection.map(({ name, Component }) => (
          <div key={name} className="flex flex-col items-center justify-center p-4 bg-brand-grey-200 rounded-lg border border-black-50 min-w-[140px]">
            <div className="mb-3">
              <Component {...args} />
            </div>
            <span className="text-xs font-medium font-body text-black-600 tracking-wide">
              {name}
            </span>
          </div>
        ))}
      </div>
    );
  },
};