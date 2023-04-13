import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import InputPassword from './InputPassword'

describe('Input Password', () => {
  describe('Default', () => {
    it('should render a default input password and fill it with text', () => {
      const { getByLabelText, getByDisplayValue } = render(
        <InputPassword aria-label="input" />
      )
      expect(getByLabelText('input')).toBeInTheDocument()
      fireEvent.input(getByLabelText('input'), {
        target: { value: 'Some text' },
      })
      expect(getByDisplayValue('Some text')).toBeInTheDocument()
      expect(getByDisplayValue('Some text')).toHaveDisplayValue('Some text')
    })

    it('should revile the password when clicking on the eye icon', () => {
      const { getByLabelText, container } = render(
        <InputPassword aria-label="input" />
      )
      expect(getByLabelText('input')).toHaveAttribute('type', 'password')
      const eyeIcon = container.querySelector('[name="eye-icon"]')
      eyeIcon && fireEvent.click(eyeIcon)
      expect(getByLabelText('input')).toHaveAttribute('type', 'text')
    })
  })

  describe('Error', () => {
    it('should render an error input password', () => {
      const { getByLabelText } = render(
        <InputPassword aria-label="input" state="error" />
      )
      expect(getByLabelText('input')).toHaveClass('bg-error-300')
    })
  })

  describe('Success', () => {
    it('should render an success input password', () => {
      const { getByLabelText } = render(
        <InputPassword aria-label="input" state="success" />
      )
      expect(getByLabelText('input')).toHaveClass('bg-success-300')
    })
  })

  describe('Disabled', () => {
    it('should render a disabled input password', () => {
      const { getByLabelText } = render(
        <InputPassword aria-label="input" disabled />
      )
      expect(getByLabelText('input')).toHaveAttribute('disabled')
    })

    it('shold not accept text', () => {
      const { getByLabelText, queryByDisplayValue } = render(
        <InputPassword aria-label="input" value="Some text" disabled />
      )
      fireEvent.input(getByLabelText('input'), {
        target: { value: 'Other text' },
      })
      expect(queryByDisplayValue('Some text')).toBeInTheDocument()
      expect(queryByDisplayValue('Other text')).not.toBeInTheDocument()
    })
  })
})
