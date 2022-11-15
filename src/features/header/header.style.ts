import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import Container from '../../components/container/container'

export const Logoimg = styled.img`
    height: 105px;
    width: auto;
    cursor: pointer;
`

export const Navbar = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const HeaderNav = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffffe0;
    position: sticky;
    top: 0;
    width: 100%;
    height: 110px;
`
export const NavbarLi = styled.li`
    list-style: none;
    margin: 0px 0px 0px 30px;
    padding: 0px 0px;
    position: relative;
    font-size: 24px;
    font-family: 'Cormorant Unicase', serif;
    &:hover {
        font-size: 25px;
        text-transform: uppercase;
        transition: all 0.3s ease 0s;
    }
`
export const NavbarA = styled(NavLink)`
    text-decoration: none;
    color: #bf9270;
`
