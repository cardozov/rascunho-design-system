import type { Meta, StoryObj } from '@storybook/react'

import ThemeSwitch, { type ThemeSwitchProps } from './ThemeSwitch'

const meta: Meta<ThemeSwitchProps> = {
  title: 'ThemeSwitch',
  component: ThemeSwitch,
  id: 'ThemeSwitch',
  argTypes: {
    default: {
      options: ['dark', 'light'],
      control: { type: 'radio' },
    },
  },
}

export default meta
type Story = StoryObj<ThemeSwitchProps>

export const Dark: Story = {
  args: {
    default: 'dark',
  },
}

export const Light: Story = {
  args: {
    default: 'light',
  },
}
