import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

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
