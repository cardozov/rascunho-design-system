import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import Input from './Input'

describe('Input', () => {
  describe('Default', () => {
    describe('should render a default input and fill it with text', () => {
      it('should render a default input', () => {
        const { getByLabelText, getByDisplayValue } = render(
          <Input aria-label="input" />
        )
        expect(getByLabelText('input')).toBeInTheDocument()
        fireEvent.input(getByLabelText('input'), {
          target: { value: 'Some text' },
        })
        expect(getByDisplayValue('Some text')).toBeInTheDocument()
      })
    })
  })

  describe('Error', () => {
    describe('should render an error input', () => {
      it('should render an error input', () => {
        const { getByLabelText } = render(
          <Input aria-label="input" state="error" />
        )
        expect(getByLabelText('input')).toBeInTheDocument()
        expect(getByLabelText('input')).toHaveClass('bg-error-300')
      })
    })
  })

  describe('Success', () => {
    describe('should render an success input', () => {
      it('should render an success input', () => {
        const { getByLabelText } = render(
          <Input aria-label="input" state="success" />
        )
        expect(getByLabelText('input')).toBeInTheDocument()
        expect(getByLabelText('input')).toHaveClass('bg-success-300')
      })
    })
  })

  describe('Disabled', () => {
    it('should render a disabled input', () => {
      const { getByLabelText } = render(<Input aria-label="input" disabled />)
      expect(getByLabelText('input')).toBeInTheDocument()
      expect(getByLabelText('input')).toHaveAttribute('disabled')
    })

    it('shold not accept text', () => {
      const { getByLabelText, queryByDisplayValue } = render(
        <Input aria-label="input" value="Some text" disabled />
      )
      fireEvent.input(getByLabelText('input'), {
        target: { value: 'Other text' },
      })
      expect(queryByDisplayValue('Some text')).toBeInTheDocument()
      expect(queryByDisplayValue('Other text')).not.toBeInTheDocument()
    })
  })
})
