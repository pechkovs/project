import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export const Button_main = styled.button`
    background-color: rgba(255, 255, 255, 0.849);
    color: #52616b;
    font-size: 22px;
    width: 360px;
    padding: 20px;
    cursor: pointer;
    font-family: 'Cormorant Unicase', serif;
    border: 2px solid #f8ede0;
    &:hover {
        transition: 0.7s;
        background-color: #eacaa3d3;
        border-radius: 50px;
        text-transform: uppercase;
    }
`
export const ButtonA = styled(NavLink)`
    text-decoration: none;
    color: #52616b;
`
