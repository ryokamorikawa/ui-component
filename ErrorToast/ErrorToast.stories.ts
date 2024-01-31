import type { Meta, StoryObj } from '@storybook/react';
import ErrorToast from 'components/ErrorToast/ErrorToast';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ErrorToast> = {
  title: 'components/ErrorToast',
  component: ErrorToast,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ErrorToast>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Sample: Story = {
  args: {
    message: '',
  },
};
