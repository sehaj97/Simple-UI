import type { Meta, StoryObj } from '@storybook/react';
import { UserForm } from '.';

const meta:Meta<typeof UserForm> = {
  title: 'components/UserForm',
  component: UserForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginForm: Story = {
    args: {
    },
  };