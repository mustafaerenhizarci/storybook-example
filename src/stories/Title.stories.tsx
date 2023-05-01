import { Meta, StoryObj } from "@storybook/react";
import Title from "../components/Title";

const meta: Meta<typeof Title> = {
  title: "Cool Title",
  component: Title,
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    label: "Title",
  },
};

export const Bold: Story = {
  args: {
    label: "Title",
    bold: true,
  },
};

export const Small: Story = {
  args: {
    label: "Title",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    label: "Title",
    size: "lg",
  },
};
