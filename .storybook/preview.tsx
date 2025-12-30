// https://storybook.js.org/docs/writing-stories/mocking-data-and-modules/mocking-providers
// https://chakra-ui.com/docs/get-started/frameworks/storybook

import type { Preview } from "@storybook/react";

import React from "react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ChakraProvider value={defaultSystem}>
        <Story />
      </ChakraProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
