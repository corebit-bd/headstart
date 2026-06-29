// frontend/src/components/ui/Tabs.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
    title: "Components/UI/Tabs",
    component: Tabs,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const sampleTabs = [
    {
        id: "intro",
        label: "Introduction",
        content: (
        <div className="p-4 max-w-xl">
            <h3 className="text-lg font-bold text-brand-purple-1000 mb-2">Welcome to HeadStart</h3>
            <p className="text-black-700">This is a showcase of the custom flat tab variant displaying rich introductory text inside the hub container layout.</p>
        </div>
        ),
    },
    {
        id: "faculty",
        label: "Our Faculty",
        content: (
        <div className="p-4 max-w-xl bg-brand-grey-1000/20 rounded-xl">
            <h3 className="text-lg font-bold text-brand-purple-1000 mb-2">Expert Professionals</h3>
            <p className="text-black-700">Interactive modules mock placeholder layout for displaying deep custom cards grid system.</p>
        </div>
        ),
    },
    {
        id: "alumni",
        label: "Our Alumni",
        content: (
        <div className="p-4 max-w-xl">
            <h3 className="text-lg font-bold text-brand-purple-1000 mb-2">Global Presence</h3>
            <p className="text-black-700">Graduates working at global tier firms representing institutional flagbearing values.</p>
        </div>
        ),
    },
];

export const Default: Story = {
    args: {
        tabs: sampleTabs,
    },
    render: (args) => (
        <div className="w-[600px] border border-brand-grey-1000 p-6 rounded-2xl bg-white shadow-sm">
            <Tabs {...args} />
        </div>
    ),
};

export const CustomDefaultValue: Story = {
    args: {
        tabs: sampleTabs,
        defaultValue: "faculty",
    },
    render: (args) => (
        <div className="w-[600px] border border-brand-grey-1000 p-6 rounded-2xl bg-white shadow-sm">
            <Tabs {...args} />
        </div>
    ),
};