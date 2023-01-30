import { createSelector, createSlice } from '@reduxjs/toolkit'

type ChartState = {
    mode: string
}

const initialState: ChartState = {
    mode: 'Pie',
}

const revenueChartSlice = createSlice({
    name: 'revenue',
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

export const revenueChartActions = revenueChartSlice.actions
export const revenueChartReducer = revenueChartSlice.reducer
export const revenueStateSelector = (state) => state.revenue
export const revenueChartModeSelector = createSelector(
    revenueStateSelector,
    (revenueState) => revenueState.mode
)
export const isPieRevenueChart = createSelector(
    revenueChartModeSelector,
    (mode) => mode === 'Pie'
)
export const isBarRevenueChart = createSelector(
    revenueChartModeSelector,
    (mode) => mode === 'Bar'
)
export const isLineRevenueChart = createSelector(
    revenueChartModeSelector,
    (mode) => mode === 'Line'
)
