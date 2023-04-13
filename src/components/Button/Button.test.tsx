import React from 'react'
import { render } from '@testing-library/react'

import Button from './Button'

describe('Button', () => {
  describe('deafult', () => {
    it('should render a default button with text', () => {
      const { getByText } = render(<Button>Default</Button>)
      expect(getByText('Default')).toBeInTheDocument()
    })

    it('should trigger onClick when clicked', () => {
      const onClick = jest.fn()
      const { getByText } = render(<Button onClick={onClick}>Default</Button>)
      getByText('Default').click()
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('disabled', () => {
    it('should render a disabled button with text', () => {
      const { getByText } = render(<Button disabled>Default</Button>)
      expect(getByText('Default')).toHaveAttribute('disabled')
      expect(getByText('Default')).toBeInTheDocument()
    })

    it('should not trigger onClick when disabled and clicked', () => {
      const onClick = jest.fn()
      const { getByText } = render(
        <Button disabled onClick={onClick}>
          Default
        </Button>
      )
      getByText('Default').click()
      expect(onClick).toHaveBeenCalledTimes(0)
    })
  })
})
