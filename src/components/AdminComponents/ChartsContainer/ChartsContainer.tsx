import React from 'react'
import { StyledChartsContainer } from './ChartsContainer.style'

const ChartsContainer: React.FC = (props) => {
    return <StyledChartsContainer>{props.children}</StyledChartsContainer>
}

export default ChartsContainer
