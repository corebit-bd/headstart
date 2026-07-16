import type { Meta, StoryObj } from "@storybook/react";
import { NavLink } from "./NavLink";

const meta = {
  title: "UI/NavLink",
  component: NavLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isActive: {
      control: "boolean",
      description: "Applies the active state styling",
    },
    href: {
      control: "text",
      description: "Destination URL",
    },
    children: {
      control: "text",
      description: "Link Text / Content",
    },
  },
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "/about",
    children: "About Us",
    isActive: false,
  },
};

export const Active: Story = {
  args: {
    href: "/about",
    children: "About Us",
    isActive: true,
  },
};

export const CustomClassName: Story = {
  args: {
    href: "/contact",
    children: "Contact",
    className: "uppercase tracking-widest",
    isActive: false,
  },
};
