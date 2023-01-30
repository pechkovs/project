import { createSelector, createSlice } from '@reduxjs/toolkit'

type ChartState = {
    mode: string
}

const initialState: ChartState = {
    mode: 'Pie',
}

const salesChartSlice = createSlice({
    name: 'sales',
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

export const salesChartActions = salesChartSlice.actions
export const salesChartReducer = salesChartSlice.reducer
export const salesStateSelector = (state) => state.sales
export const salesChartModeSelector = createSelector(
    salesStateSelector,
    (salesState) => salesState.mode
)
export const isPieSalesChart = createSelector(
    salesChartModeSelector,
    (mode) => mode === 'Pie'
)
export const isBarSalesChart = createSelector(
    salesChartModeSelector,
    (mode) => mode === 'Bar'
)
export const isLineSalesChart = createSelector(
    salesChartModeSelector,
    (mode) => mode === 'Line'
)
