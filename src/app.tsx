import React from 'react'
import MenuPage from './pages/menu/menu'
import MainPage from './pages/main/main'
//import ConstructorPage from './pages/constructor/constructor'
import { globalStyles } from './app.style'
import { Global } from '@emotion/react'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/layout/layout'
import NotFoundPage from './pages/404/404'
import { getNavigationsValue } from '@ijl/cli'
import { Provider } from 'react-redux'
import { store } from './_data_/store/store'

// Этот компонент загружается динамически благодаря React.lazy
const ConstructorPage = React.lazy(
    () => import('./pages/constructor/constructor')
)

const AdminPage = React.lazy(() => import('./pages/adminPanel/admin'))

const router = createBrowserRouter(
    [
        {
            path: getNavigationsValue('sugarbun.main'),
            element: <Layout />,
            errorElement: <NotFoundPage />,
            children: [
                {
                    path: getNavigationsValue('sugarbun.main'),
                    element: <MainPage />,
                },
                {
                    path: getNavigationsValue('sugarbun.menu'),
                    element: (
                        <React.Suspense fallback={<div>Загрузка...</div>}>
                            <div>
                                <MenuPage />
                            </div>
                        </React.Suspense>
                    ),
                },
                {
                    path: getNavigationsValue('sugarbun.constructor'),
                    element: (
                        <React.Suspense fallback={<div>Загрузка...</div>}>
                            <div>
                                <ConstructorPage />
                            </div>
                        </React.Suspense>
                    ),
                },
                {
                    path: getNavigationsValue('sugarbun.admin'),
                    element: (
                        <React.Suspense fallback={<div>Загрузка...</div>}>
                            <div>
                                <AdminPage />,
                            </div>
                        </React.Suspense>
                    ),
                },
            ],
        },
    ],
    { basename: getNavigationsValue('sugarbun.home') }
)

const App = () => {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
            <Global styles={globalStyles} />
        </Provider>
    )
}

export default App
