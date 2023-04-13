import { Meta, StoryObj } from '@storybook/react'

import InputPassword, { type InputPasswordProps } from './InputPassword'

const meta: Meta<InputPasswordProps> = {
  title: 'InputPassword',
  component: InputPassword,
  id: 'InputPassword',
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
type Story = StoryObj<InputPasswordProps>

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
