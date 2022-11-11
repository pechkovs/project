import React from 'react'
import { NavbarA, NavbarLi } from './navbar-item.style'

type NavbarItemProps = {
    href: string
    name: string
}

const NavbarItem: React.FC<NavbarItemProps> = (props) => {
    return (
        <NavbarLi>
            <NavbarA href={props.href}>{props.name}</NavbarA>
        </NavbarLi>
    )
}

export default NavbarItem
