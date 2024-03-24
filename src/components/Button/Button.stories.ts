import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

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
    mode: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Click Me',
    mode: 'secondary',
  },
};

export const Success: Story = {
  args: {
    label: 'Click Me',
    mode: 'success',
  },
};

export const Danger: Story = {
  args: {
    label: 'Click Me',
    mode: 'danger',
  },
};
export const Small: Story = {
  args: {
    label: 'Click Me',
    mode: 'primary',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    label: 'Click Me',
    mode: 'primary',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    label: 'Click Me',
    mode: 'primary',
    size: 'large',
  },
};