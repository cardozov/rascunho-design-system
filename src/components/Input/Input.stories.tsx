import { Meta, StoryObj } from '@storybook/react'

import Input, { type InputProps } from './Input'

const meta: Meta<InputProps> = {
  title: 'Input',
  component: Input,
  id: 'Input',
  argTypes: {
    state: {
      options: ['default', 'error', 'success'],
      control: { type: 'inline-radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<InputProps>

export const Default: Story = {
  args: {
    value: 'Text',
  },
}

export const Disabled: Story = {
  args: {
    value: 'Text',
    state: 'default',
    disabled: true,
  },
}

export const Error: Story = {
  args: {
    value: 'Text',
    state: 'error',
  },
}

export const Success: Story = {
  args: {
    value: 'Text',
    state: 'success',
  },
}

export const WithDescription: Story = {
  args: {
    value: 'Text',
    description: 'Description',
  },
}
