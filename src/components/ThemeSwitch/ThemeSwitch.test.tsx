import { act, render } from '@testing-library/react'

import ThemeSwitch from './ThemeSwitch'

describe('ThemeSwitch', () => {
  it('should render with light mode by default', () => {
    const { getByRole } = render(<ThemeSwitch />)
    const switchElement = getByRole('switch')
    expect(switchElement).toBeInTheDocument()
    expect(switchElement).toHaveClass('bg-darken')
  })

  it('should render with dark mode when passing default dark', () => {
    const { getByRole } = render(<ThemeSwitch default="dark" />)
    const switchElement = getByRole('switch')
    expect(switchElement).toHaveClass('bg-dark-darken')
  })

  it('should switch theme', async () => {
    const onChange = jest.fn()
    const { getByRole } = render(
      <ThemeSwitch default="dark" onChange={onChange} />
    )
    const switchElement = getByRole('switch')
    expect(switchElement).toHaveClass('bg-dark-darken')
    act(() => switchElement.click())
    expect(onChange).toBeCalledTimes(1)
    expect(onChange).toBeCalledWith('light')
    expect(getByRole('switch')).toHaveClass('bg-darken')
  })
})
