import React from 'react'
import { Selector } from './selectors.style'

type FormSelectorProps = {
    options: Array<{ id: string; name: string }>
}
// eslint-disable-next-line react/prop-types
const FormSelector = React.forwardRef<HTMLSelectElement, FormSelectorProps>(
    ({ options, ...rest }, ref) => {
        return (
            <Selector ref={ref} {...rest}>
                {options.map((option) => {
                    return (
                        <option key={option.id} value={option.name} selected>
                            {option.name}
                        </option>
                    )
                })}
            </Selector>
        )
    }
)
FormSelector.displayName = 'FormSelector'
export default FormSelector
