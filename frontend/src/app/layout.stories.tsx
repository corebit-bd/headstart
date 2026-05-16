import type { Meta, StoryObj } from "@storybook/react";
import RootLayout from "./layout";

const meta = {
  title: "App/Layout",
  component: RootLayout,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  // Since RootLayout renders <html> and <body> tags,
  // we usually want to mock the children content.
} satisfies Meta<typeof RootLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Page Content</h1>
        <p className="mt-4">
          This is where the Page-Specific Content would be rendered inside the
          Main Tag.
        </p>
        <div className="h-[50vh] mt-8 bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300">
          Scrollable Content Placeholder
        </div>
      </div>
    ),
  },
};

export const WithHeroPlaceholder: Story = {
  args: {
    children: (
      <>
        <section className="bg-blue-600 text-white py-20 px-8 text-center">
          <h1 className="text-4xl font-extrabold">Hero Section Mock</h1>
          <p className="mt-2 text-xl">Simulating the Home Page Layout.</p>
        </section>
        <section className="p-8">
          <p>Additional Sections following the Hero ... .. .</p>
        </section>
      </>
    ),
  },
};
