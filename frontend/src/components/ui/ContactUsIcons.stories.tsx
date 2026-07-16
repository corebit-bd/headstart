import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  WhatsAppIcon,
} from "./ContactUsIcons";

// 1. Define an interface for the custom playground controls
interface IconStoryProps {
  className: string;
  color?: string;
}

// 2. Pass the interface as a type argument to Meta
const meta: Meta<IconStoryProps> = {
  title: "Components/Icons/ContactUsIcons",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

// 3. Pass the interface as a type argument to StoryObj
export const Interactive: StoryObj<IconStoryProps> = {
  argTypes: {
    className: {
      control: "text",
      description: "Tailwind CSS classes to apply to the SVG icon",
    },
    color: {
      control: "select",
      options: ["text-brand-purple-1000", "text-brand-gold-1000", "text-success-1000", "text-black-1000"],
      description: "Direct color token test",
    },
  },
  args: {
    className: "w-12 h-12 text-brand-purple-1000",
  },
  render: ({ className, color }) => {
    // Safely parse the customized styles without typescript warnings
    const computedClass = color ? `${className.split(" text-")[0]} ${color}` : className;
    return (
      <div className="grid grid-cols-5 gap-8 items-center justify-items-center p-8 bg-brand-grey-50 rounded-xl">
        <div className="flex flex-col items-center gap-2">
          <MapPinIcon className={computedClass} />
          <span className="text-xs text-black-600 font-mono">MapPinIcon</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <PhoneIcon className={computedClass} />
          <span className="text-xs text-black-600 font-mono">PhoneIcon</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <EnvelopeIcon className={computedClass} />
          <span className="text-xs text-black-600 font-mono">EnvelopeIcon</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <ClockIcon className={computedClass} />
          <span className="text-xs text-black-600 font-mono">ClockIcon</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <WhatsAppIcon className={computedClass} />
          <span className="text-xs text-black-600 font-mono">WhatsAppIcon</span>
        </div>
      </div>
    );
  },
};

// 4. Use standard StoryObj for the layout-only story (which doesn't use dynamic args)
export const ThemeContextMapped: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-6 p-6 bg-white border border-brand-grey-200 rounded-xl">
      <h3 className="text-lg font-bold text-black-900 border-b border-black-100 pb-2">
        System Token Matching Map
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-3 p-3 bg-brand-purple-50 rounded-lg">
          <MapPinIcon className="w-8 h-8 text-brand-purple-1000" />
          <div>
            <p className="text-sm font-semibold text-black-900">MapPinIcon</p>
            <p className="text-xs text-black-500">text-brand-purple-1000 on brand-purple-50</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-3 bg-brand-purple-50 rounded-lg">
          <PhoneIcon className="w-8 h-8 text-brand-purple-1000" />
          <div>
            <p className="text-sm font-semibold text-black-900">PhoneIcon</p>
            <p className="text-xs text-black-500">text-brand-purple-1000 on brand-purple-50</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-brand-purple-50 rounded-lg">
          <EnvelopeIcon className="w-8 h-8 text-brand-purple-1000" />
          <div>
            <p className="text-sm font-semibold text-black-900">EnvelopeIcon</p>
            <p className="text-xs text-black-500">text-brand-purple-1000 on brand-purple-50</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-success-50 rounded-lg">
          <WhatsAppIcon className="w-8 h-8 text-success-1000" />
          <div>
            <p className="text-sm font-semibold text-black-900">WhatsAppIcon</p>
            <p className="text-xs text-black-500">text-success-1000 on success-50</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-black-50 rounded-lg col-span-1 md:col-span-2">
          <ClockIcon className="w-8 h-8 text-black-600" />
          <div>
            <p className="text-sm font-semibold text-black-900">ClockIcon</p>
            <p className="text-xs text-black-500">text-black-600 on black-50 (Office Hours)</p>
          </div>
        </div>
      </div>
    </div>
  ),
};