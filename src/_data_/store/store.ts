import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { rtkForm } from '../rtkform/rtkform'
import { rtkCake } from '../rtkcake/rtkcake'

const rootReducer = combineReducers({
    //userReducer,
    [rtkForm.reducerPath]: rtkForm.reducer,
    [rtkCake.reducerPath]: rtkCake.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                rtkForm.middleware,
                rtkCake.middleware
            ),
    })
}

export const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
