import { describe, it, expect } from '@jest/globals'
import React from 'react'
import { act, render, screen, waitFor } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import 'whatwg-fetch'
import '@testing-library/jest-dom'
import adminstatstest from './adminstats.test.json'
import OrdersChart from '../Chart/OrdersChart'
import { Provider } from 'react-redux'
import { setupStore } from '../../../_data_/store/store'
import 'react-chartjs-2'

jest.mock('react-chartjs-2', () => ({
    Pie: () => null,
    Line: () => null,
    Bar: () => null,
}))

const server = setupServer(
    rest.get('/admin/adminstats', (req, res, ctx) => {
        return res(ctx.json(adminstatstest))
    }),

    rest.post('/admin/post', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(adminstatstest))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('OrdersChart', () => {
    const loaded = async () => {
        await waitFor(() => screen.getByText('23'))
    }
    it('should render the OrdersChart', () => {
        const store = setupStore()
        const { container } = render(
            <Provider store={store}>
                <OrdersChart />
            </Provider>
        )
        expect(container).toMatchSnapshot()
    })
    it('should render the OrdersChart', async () => {
        const store = setupStore()
        const { container } = render(
            <Provider store={store}>
                <OrdersChart />
            </Provider>
        )
        await loaded()
        expect(container).toMatchSnapshot()
    })
})
