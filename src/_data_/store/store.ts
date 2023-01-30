import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { rtkForm } from '../rtkform/rtkform'

const rootReducer = combineReducers({
    //userReducer,
    [rtkForm.reducerPath]: rtkForm.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(rtkForm.middleware),
    })
}

export const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
