import { fireEvent, render } from '@testing-library/react'

import Switch from './Switch'

describe('Switch', () => {
  it('should render with no param', () => {
    const { getByRole } = render(<Switch />)
    expect(getByRole('switch')).toBeInTheDocument()
    expect(getByRole('switch')).toHaveAttribute('aria-checked', 'false')
  })

  it('should render checked by default', () => {
    const { getByRole } = render(<Switch default={true} />)
    expect(getByRole('switch')).toBeInTheDocument()
    expect(getByRole('switch')).toHaveAttribute('aria-checked', 'true')
  })

  it('should change state when clicked', async () => {
    const onChange = jest.fn()
    const { getByRole } = render(<Switch default={false} onChange={onChange} />)
    const switchElement = getByRole('switch')
    expect(switchElement).toHaveAttribute('aria-checked', 'false')
    fireEvent.click(switchElement)
    expect(switchElement).toHaveAttribute('aria-checked', 'true')
    expect(onChange).toBeCalledTimes(1)
    expect(onChange).toBeCalledWith(true)
  })

  it('should not change state when disabled', async () => {
    const onChange = jest.fn()
    const { getByRole } = render(
      <Switch default={false} onChange={onChange} disabled />
    )
    const switchElement = getByRole('switch')
    expect(switchElement).toHaveAttribute('aria-checked', 'false')
    fireEvent.click(switchElement)
    expect(switchElement).toHaveAttribute('aria-checked', 'false')
    expect(onChange).toBeCalledTimes(0)
  })

  it('should render with custom class', () => {
    const { getByRole } = render(<Switch className="custom-class" />)
    expect(getByRole('switch')).toHaveClass('custom-class')
  })
})
