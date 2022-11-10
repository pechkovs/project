import React from 'react'
import Header from './features/header/header'
import MenuPage from './pages/menu'
import MainPage from './pages/main/main'
import ConstructorPage from './pages/constructor/constructor'
import { globalStyles } from './app.style'
import { Global } from '@emotion/react'
import Footer from './features/footer/footer'
import './index.css'

const App = () => {
    return (
        <>
            <Global styles={globalStyles} />
            <Header />
            <main>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <h1>122</h1>
                <MainPage />
                <MenuPage />
                <ConstructorPage />
            </main>
            <Footer />
        </>
    )
}

export default App
