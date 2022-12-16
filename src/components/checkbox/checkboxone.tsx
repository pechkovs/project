import React from 'react'
import {
    CboxContainer,
    CboxInput,
    CboxLabel,
    CustomCbox,
} from './checkboxone.style'

// eslint-disable-next-line react/prop-types
const Checkbox = ({ lableTxt, inputProps }) => {
    return (
        <CboxContainer>
            <CboxLabel>
                <CboxInput
                    {...inputProps}
                    className="CboxInput"
                    type={'checkbox'}
                />

                <CustomCbox className="CustomCbox">{lableTxt}</CustomCbox>
            </CboxLabel>
        </CboxContainer>
    )
}

export default Checkbox
