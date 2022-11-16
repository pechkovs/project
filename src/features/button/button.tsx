import React from 'react'
import { Button_main, ButtonA } from './button.style'

type ButtonItemProps = {
    to: string
}

const ButtonItem: React.FC<ButtonItemProps> = ({ to, children }) => {
    return (
        <Button_main>
            <ButtonA to={to}>{children}</ButtonA>
        </Button_main>
    )
}

export default ButtonItem
