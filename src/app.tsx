import React from 'react'
import Header from './features/header/header'
import MenuPage from './pages/menu'

const App = () => {
    return (
        <>
            <Header />
            <main>
                <MenuPage />
            </main>
            <footer>footer</footer>
        </>
    )
}

export default App
