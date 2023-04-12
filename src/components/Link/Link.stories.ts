import type { Meta, StoryObj } from '@storybook/react'

import Link, { type LinkProps } from './Link'

const meta: Meta<LinkProps> = {
  title: 'Link',
  component: Link,
  tags: ['autodocs'],
  id: 'link',
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'default'],
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
type Story = StoryObj<LinkProps>

export const Example: Story = {
  args: {
    children: 'Link',
  },
}
