import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonType } from '.';

const meta:Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Click Me',
    mode: ButtonType.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Click Me',
    mode: ButtonType.SECONDARY,
  },
};

export const Success: Story = {
  args: {
    label: 'Click Me',
    mode: ButtonType.SUCCESS,
  },
};

export const Danger: Story = {
  args: {
    label: 'Click Me',
    mode: ButtonType.DANGER,
  },
};
