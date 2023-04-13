import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'

import Link from './Link'

describe('Link', () => {
  describe('Default', () => {
    it('should render a link with text', () => {
      const { getByText } = render(<Link href="#">Default</Link>)
      expect(getByText('Default')).toBeInTheDocument()
    })

    it('should render a link with correct location', () => {
      const { getByText } = render(
        <Link href="http://localhost/cpxinha">Default</Link>
      )
      expect(getByText('Default')).toHaveAttribute(
        'href',
        'http://localhost/cpxinha'
      )
    })
  })

  describe('Disabled', () => {
    it('should render a disabled link with text', () => {
      const { getByText } = render(
        <Link disabled href="#">
          Default
        </Link>
      )
      expect(getByText('Default')).toHaveAttribute('aria-disabled')
      expect(getByText('Default')).toBeInTheDocument()
    })

    it('should not trigger navigation when disabled and clicked', () => {
      const { getByText } = render(
        <Link disabled href="#">
          Default
        </Link>
      )
      expect(getByText('Default')).toHaveClass(
        'aria-disabled:pointer-events-none'
      )
    })
  })
})
