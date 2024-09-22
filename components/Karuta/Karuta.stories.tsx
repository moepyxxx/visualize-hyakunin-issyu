import type { Meta, StoryObj } from "@storybook/react";

import { Karuta } from "./Karuta";

export type Story = StoryObj<typeof Karuta>;

const meta = {
  title: "Karuta",
  component: Karuta,
  args: {
    kaminoku: "わかころもてはつゆにぬれつつ",
  },
} satisfies Meta<typeof Karuta>;

export default meta;

export const Base: Story = {};
