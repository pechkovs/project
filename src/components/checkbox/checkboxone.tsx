import React from 'react'
import {
    CboxContainer,
    CboxInput,
    CboxLabel,
    CustomCbox,
} from './checkboxone.style'

// eslint-disable-next-line react/prop-types
const Checkbox = ({ lableTxt, id }) => {
    return (
        <CboxContainer>
            <CboxLabel>
                <CboxInput className="CboxInput" type={'checkbox'} id={id} />

                <CustomCbox className="CustomCbox">{lableTxt}</CustomCbox>
            </CboxLabel>
        </CboxContainer>
    )
}

export default Checkbox
