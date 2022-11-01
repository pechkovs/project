import React from 'react'
import Header from './features/header/header'
import MenuPage from './pages/menu'
import { Global, css } from '@emotion/react'

const App = () => {
    return (
        <>
            <Global
                styles={css`
                    body {
                        background-color: #f5f5f5;
                    }
                `}
            />
            <Header />
            <main>
                <MenuPage />
            </main>
            <footer>footer</footer>
        </>
    )
}

export default App
