import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '.';

const meta:Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    danger: false,
    label: 'Click Me',
    backgroundColor:'bg-white'
  },
};

export const Danger: Story = {
  args: {
    danger: true,
    label: 'Click Me',
    backgroundColor:'bg-white'
  },
};
