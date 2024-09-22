import type { Meta, StoryObj } from "@storybook/react";
import { KarutaList } from "./KarutaList";

export type Story = StoryObj<typeof KarutaList>;

const meta = {
  title: "KarutaList",
  component: KarutaList,
} satisfies Meta<typeof KarutaList>;

export default meta;

export const Base: Story = {};
