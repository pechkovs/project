import React from 'react'
import { Selector } from './selectors.style'

// eslint-disable-next-line react/prop-types
const FormSelector = React.forwardRef(({ options, id, ...rest }, ref) => {
    return (
        <Selector ref={ref} {...rest} id={id}>
            {options.map((option) => {
                console.log(options)
                return (
                    <option key={option.id} value={option.name} selected>
                        {option.name}
                    </option>
                )
            })}
        </Selector>
    )
})

export default FormSelector
