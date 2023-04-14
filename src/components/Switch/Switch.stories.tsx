import type { Meta, StoryObj } from '@storybook/react'

import Switch, { type SwitchProps } from './Switch'

const meta: Meta<SwitchProps> = {
  title: 'Switch',
  component: Switch,
  id: 'Switch',
  argTypes: {
    default: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    variant: {
      control: { type: 'radio' },
    },
  },
}

export default meta
type Story = StoryObj<SwitchProps>

export const CommonEnabled: Story = {
  args: {
    variant: 'common',
    default: true,
  },
}

export const CommonNotEnabled: Story = {
  args: {
    variant: 'common',
    default: false,
  },
}

export const ContractEnabled: Story = {
  args: {
    variant: 'contract',
    default: true,
  },
}

export const ContractNotEnabled: Story = {
  args: {
    variant: 'contract',
    default: false,
  },
}

export const CommonEnabledDisabled: Story = {
  args: {
    default: true,
    disabled: true,
  },
}

export const CommonNotEnabledDisabled: Story = {
  args: {
    default: false,
    disabled: true,
  },
}

export const ContractEnabledDisabled: Story = {
  args: {
    variant: 'contract',
    default: true,
    disabled: true,
  },
}

export const ContractNotEnabledDisabled: Story = {
  args: {
    variant: 'contract',
    default: false,
    disabled: true,
  },
}
