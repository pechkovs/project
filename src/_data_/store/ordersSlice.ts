import { createSelector, createSlice } from '@reduxjs/toolkit'

type ChartState = {
    mode: string
}

const initialState: ChartState = {
    mode: 'Pie',
}

const ordersChartSlice = createSlice({
    name: 'orders',
    initialState: initialState,
    reducers: {
        switchMode(state, action) {
            if (action.payload === 'Pie') {
                state.mode = 'Pie'
            }
            if (action.payload === 'Bar') {
                state.mode = 'Bar'
            }
            if (action.payload === 'Line') {
                state.mode = 'Line'
            }
        },
    },
})

export const ordersChartActions = ordersChartSlice.actions
export const ordersChartReducer = ordersChartSlice.reducer
export const ordersStateSelector = (state) => state.orders
export const ordersChartModeSelector = createSelector(
    ordersStateSelector,
    (ordersState) => ordersState.mode
)
export const isPieOrdersChart = createSelector(
    ordersChartModeSelector,
    (mode) => mode === 'Pie'
)
export const isBarOrdersChart = createSelector(
    ordersChartModeSelector,
    (mode) => mode === 'Bar'
)
export const isLineOrdersChart = createSelector(
    ordersChartModeSelector,
    (mode) => mode === 'Line'
)
