import React from 'react'
import { describe, it, expect } from '@jest/globals'
import { render } from '@testing-library/react'
import AdminPage from './admin'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../_data_/store/store'

describe('AdminPage', () => {
    it('snapshot', () => {
        const { container } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <AdminPage />
                </Provider>
            </BrowserRouter>
        )
        expect(container).toMatchSnapshot()
    })
})
