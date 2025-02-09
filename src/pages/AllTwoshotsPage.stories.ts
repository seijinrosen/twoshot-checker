import type { Meta, StoryObj } from "@storybook/react";

import AllTwoshotsPage from "./AllTwoshotsPage";

const meta = {
  component: AllTwoshotsPage,
} satisfies Meta<typeof AllTwoshotsPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    searchQuery: "",
  },
};
