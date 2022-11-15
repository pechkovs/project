import React from 'react'
import MenuPage from './pages/menu/menu'
import MainPage from './pages/main/main'
import ConstructorPage from './pages/constructor/constructor'
import { globalStyles } from './app.style'
import { Global } from '@emotion/react'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/layout/layout'
import NotFoundPage from './pages/404/404'
import { getNavigationsValue } from '@ijl/cli'

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
                    element: <MenuPage />,
                },
                {
                    path: getNavigationsValue('sugarbun.constructor'),
                    element: <ConstructorPage />,
                },
            ],
        },
    ],
    { basename: getNavigationsValue('sugarbun.home') }
)

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
            <Global styles={globalStyles} />
        </>
    )
}

export default App
