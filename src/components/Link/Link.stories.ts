import type { Meta, StoryObj } from '@storybook/react'

import Link, { type LinkProps } from './Link'

const meta: Meta<LinkProps> = {
  title: 'Link',
  component: Link,
  id: 'link',
  argTypes: {
    size: {
      options: ['sm', 'default'],
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
type Story = StoryObj<LinkProps>

export const Default: Story = {
  args: {
    children: 'Link',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Link',
    disabled: true,
  },
}
