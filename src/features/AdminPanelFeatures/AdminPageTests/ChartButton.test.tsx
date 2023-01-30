import { describe, it, expect } from '@jest/globals'
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ChartButton } from '../ChartButton/ChartButton'

describe('ChartButton', () => {
    it('should call function on button click', () => {
        const fn = jest.fn()
        render(<ChartButton onClick={fn} />)

        const button = screen.getByRole('button')

        fireEvent.click(button)

        expect(fn).toHaveBeenCalled()
    })
})
