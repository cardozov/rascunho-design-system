import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import Link from './Link'
import { Router } from 'next/router'

describe('Link', () => {
  let routerChangeStartMock: any

  beforeEach(() => {
    routerChangeStartMock = jest.fn()
    Router.events.on('routeChangeStart', routerChangeStartMock)
  })

  afterEach(() => {
    routerChangeStartMock = null
    Router.events.off('routeChangeStart', routerChangeStartMock)
  })

  describe('default', () => {
    it('should render a link with text', () => {
      const { getByText } = render(<Link href="#">Default</Link>)
      expect(getByText('Default')).toBeInTheDocument()
    })

    xit('should navigate to correct location when clicked', () => {
      const { getByText } = render(<Link href="#">Default</Link>)
      getByText('Default').click()
      expect(getByText('Default')).toHaveAttribute('href', '#')
      expect(routerChangeStartMock).toHaveBeenCalledWith('http://localhost/#')
    })
  })

  describe('disabled', () => {
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
      getByText('Default').click()
      expect(routerChangeStartMock).toHaveBeenCalledTimes(0)
    })
  })
})
