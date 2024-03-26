import type { Meta, StoryObj } from '@storybook/react';
import { UserInput, UserInputType } from '.';

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
    type: UserInputType.TEXT,
    id:'userText',
    labelText: "User Text",
    placeholderValue: "Enter your text here",
    tabIndex:0
  },
};


export const Password: Story = {
  args: {
    type: UserInputType.PASSWORD,
    id:'passwordText',
    labelText: "Password",
    placeholderValue: "Enter your password here...",
    tabIndex:0
  },
};

export const Email: Story = {
  args: {
    type: UserInputType.EMAIL,
    id:'emailText',
    labelText: "Email",
    placeholderValue: "Enter your Email here...",
    tabIndex:0
  },
};



// <input type="button">
// <input type="checkbox">
// <input type="color">
// <input type="date">
// <input type="datetime-local">
// <input type="email">
// <input type="file">
// <input type="hidden">
// <input type="image">
// <input type="month">
// <input type="number">
// <input type="password">
// <input type="radio">
// <input type="range">
// <input type="reset">
// <input type="search">
// <input type="submit">
// <input type="tel">
// <input type="text">
// <input type="time">
// <input type="url">
// <input type="week">