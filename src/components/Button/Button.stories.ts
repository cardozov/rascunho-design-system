import type { Meta, StoryObj } from '@storybook/react'

import Button, { type ButtonProps } from './Button'

const meta: Meta<ButtonProps> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  id: 'button',
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
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

export const Example: Story = {
  args: {
    children: 'Action',
  },
}
