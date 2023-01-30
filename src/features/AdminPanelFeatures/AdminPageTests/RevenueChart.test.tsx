import { describe, it, expect } from '@jest/globals'
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import RevenueChart from '../Chart/RevenueChart'
import { store } from '../../../_data_/store/store'
import Provider from 'react-redux/es/components/Provider'

describe('OrdersChart', () => {
    it('should render the SalesChart', () => {
        const { container } = render(
            <Provider store={store}>
                <RevenueChart />
            </Provider>
        )
        expect(container).toMatchSnapshot()
    })
})
