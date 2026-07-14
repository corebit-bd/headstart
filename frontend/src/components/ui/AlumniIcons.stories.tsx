import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  QuoteIcon,
  TrendUpIcon,
  CheckIcon,
  DeloitteLogo,
  PwCLogo,
  EYLogo,
  KPMGLogo,
  LogoCard,
  TrackWrapper,
} from "./AlumniIcons";

// ============================================
// Storybook Metadata
// ============================================
const meta: Meta = {
  title: "Design System/Alumni Components",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "High-integrity vector icons, authentic partner brand SVGs, and layout helpers engineered for the HeadStart Alumni segment.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="p-8 bg-brand-grey-50 rounded-xl border border-black-100 min-w-[300px] flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;

// ============================================
// Story Variations: Functional Icons
// ============================================
export const Quote: StoryObj = {
  render: () => <QuoteIcon />,
};

export const TrendUp: StoryObj = {
  render: () => <TrendUpIcon />,
};

export const Check: StoryObj = {
  render: () => <CheckIcon />,
};

// ============================================
// Story Variations: Corporate SVG Logos
// ============================================
export const Deloitte: StoryObj = {
  render: () => (
    <div className="w-48 flex items-center justify-center py-4 bg-white rounded border border-black-50">
      <DeloitteLogo />
    </div>
  ),
};

export const PwC: StoryObj = {
  render: () => (
    <div className="w-48 flex items-center justify-center py-4 bg-white rounded border border-black-50">
      <PwCLogo />
    </div>
  ),
};

export const EY: StoryObj = {
  render: () => (
    <div className="w-48 flex items-center justify-center py-4 bg-white rounded border border-black-50">
      <EYLogo />
    </div>
  ),
};

export const KPMG: StoryObj = {
  render: () => (
    <div className="w-48 flex items-center justify-center py-4 bg-white rounded border border-black-50">
      <KPMGLogo />
    </div>
  ),
};

// ============================================
// Story Variations: Layout & Containers
// ============================================
export const CardWrapper: StoryObj = {
  render: () => (
    <LogoCard>
      <DeloitteLogo />
    </LogoCard>
  ),
};

export const MarqueeTrackPreview: StoryObj = {
  decorators: [
    (Story) => (
      <div className="w-full max-w-4xl overflow-hidden bg-brand-grey-50 p-6 rounded-xl border border-black-50">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <TrackWrapper>
      <LogoCard>
        <DeloitteLogo />
      </LogoCard>
      <LogoCard>
        <PwCLogo />
      </LogoCard>
      <LogoCard>
        <EYLogo />
      </LogoCard>
      <LogoCard>
        <KPMGLogo />
      </LogoCard>
    </TrackWrapper>
  ),
};