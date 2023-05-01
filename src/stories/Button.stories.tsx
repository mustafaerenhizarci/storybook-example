import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button";

const meta: Meta<typeof Button> = {
  title: "Cool Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Default",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Secondary",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    label: "Small",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    label: "Large",
  },
};
