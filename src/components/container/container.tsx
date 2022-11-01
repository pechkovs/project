import React from 'react'
import { StyledContainer } from './container.style'

const Container: React.FC = (props) => {
    return <StyledContainer>{props.children}</StyledContainer>
}

export default Container
