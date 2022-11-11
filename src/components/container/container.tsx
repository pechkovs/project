import React from 'react'
import { StyledContainer } from './container.style'

type ConteinerProps = { className?: string }

const Container: React.FC<ConteinerProps> = (props) => {
    return (
        <StyledContainer className={props.className}>
            {props.children}
        </StyledContainer>
    )
}

export default Container
