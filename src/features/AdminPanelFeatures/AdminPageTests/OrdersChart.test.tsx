import { describe, it, expect } from '@jest/globals'
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import OrdersChart from '../Chart/OrdersChart'
import { Provider } from 'react-redux'
import { store } from '../../../_data_/store/store'

describe('OrdersChart', () => {
    it('should render the SalesChart', () => {
        const { container } = render(
            <Provider store={store}>
                <OrdersChart />
            </Provider>
        )
        expect(container).toMatchSnapshot()
    })
})
