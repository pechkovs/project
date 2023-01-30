import { describe, it, expect } from '@jest/globals'
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import SalesChart from '../Chart/SalesChart'
import { store } from '../../../_data_/store/store'
import { Provider } from 'react-redux'

describe('OrdersChart', () => {
    it('should render the SalesChart', () => {
        const { container } = render(
            <Provider store={store}>
                <SalesChart />
            </Provider>
        )
        expect(container).toMatchSnapshot()
    })
})
