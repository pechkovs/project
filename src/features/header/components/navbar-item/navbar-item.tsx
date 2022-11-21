import React from 'react'
import { NavbarLi, NavbarA } from './navbar-item.style'

type NavbarItemProps = {
    to: string
}

const NavbarItem: React.FC<NavbarItemProps> = ({ to, children }) => {
    return (
        <NavbarLi>
            <NavbarA to={to}>{children}</NavbarA>
        </NavbarLi>
    )
}

export default NavbarItem
