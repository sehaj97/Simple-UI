import type { Meta, StoryObj } from '@storybook/react';
import { UserInput } from '.';

const meta:Meta<typeof UserInput> = {
  title: 'components/UserInput',
  component: UserInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: "text",
    backgroundColor: "bg-white",
    placeHolderValue: "Enter Input for input type text"
  },
};

export const TextArea: Story = {
    args: {
        type: "textarea",
        backgroundColor: "bg-white",
        placeHolderValue: "Enter Input for input type text Area"
      },
};
