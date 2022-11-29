import React from 'react'
import { CheckboxContainer } from './checkboxitem.style'

// eslint-disable-next-line react/prop-types, @typescript-eslint/no-unused-vars
const Checkbox = ({ lableTxt, id }) => (
    <CheckboxContainer>
        <input type={'checkbox'} id={id} />
        <label htmlFor={id}>{lableTxt}</label>
    </CheckboxContainer>
)

export default Checkbox
