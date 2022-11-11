import React from 'react'
import NavbarItem from './components/navbar-item/navbar-item'
import { HeaderNav, Logoimg, Navbar } from './header.style'

const Header = () => {
    return (
        <>
            <HeaderNav>
                <a href="/">
                    <Logoimg
                        src={`${__webpack_public_path__}remote-assets/Main_logo.png`}
                        alt="Main_logo"
                    />
                </a>
                <div>
                    <Navbar>
                        <NavbarItem href="/" name="Главная" />
                        <NavbarItem href="/" name="Меню" />
                        <NavbarItem href="/" name="Конструктор" />
                    </Navbar>
                </div>
            </HeaderNav>
        </>
    )
}
export default Header
