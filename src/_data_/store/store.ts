import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { rtkForm } from '../rtkform/rtkform'
import { api } from './api'
import { ordersChartReducer } from './ordersSlice'
import { revenueChartReducer } from './revenueSlice'
import { salesChartReducer } from './salesSlice'

const rootReducer = combineReducers({
    //userReducer,
    [rtkForm.reducerPath]: rtkForm.reducer,
    [api.reducerPath]: api.reducer,
    sales: salesChartReducer,
    revenue: revenueChartReducer,
    orders: ordersChartReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(rtkForm.middleware, api.middleware),
    })
}

export const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
