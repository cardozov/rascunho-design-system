import type { Meta, StoryObj } from '@storybook/react'

import Button, { type ButtonProps } from './Button'

const meta: Meta<ButtonProps> = {
  title: 'Button',
  component: Button,
  id: 'button',
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
}

export default meta
type Story = StoryObj<ButtonProps>

export const Default: Story = {
  args: {
    children: 'Action',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Action',
    disabled: true,
  },
}
