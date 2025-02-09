// https://storybook.js.org/docs/writing-stories/mocking-data-and-modules/mocking-providers

import type { Preview } from "@storybook/react";

import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "../src/theme";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ChakraProvider theme={theme}>
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
