import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../features/footer/footer'
import Header from '../../features/header/header'

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout
