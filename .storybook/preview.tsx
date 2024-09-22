import type { Preview } from "@storybook/react";
import React from "react";
import "../app/globals.css";
import { NotoSerifJP } from "../app/fonts/NotoSerifJP";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={NotoSerifJP.className}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
