import React from 'react'
import { Button_main } from './ChartButton.style'

type Props = {
    type?: 'button' | 'submit'
    onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

export const ChartButton: React.FC<Props> = (props) => {
    return (
        <Button_main type={props.type || 'button'} onClick={props.onClick}>
            {props.children}
        </Button_main>
    )
}
