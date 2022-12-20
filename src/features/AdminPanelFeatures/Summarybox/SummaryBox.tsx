import React from 'react'
import { IsummData as Props } from './IsummData'
import { Icon } from '@iconify/react'
const SummaryBox: React.FC<{ item: Props }> = (props) => {
    return (
        <div>
            <div>
                <div>
                    <Icon icon={props.item.icon} width="56" />
                </div>
                <div>
                    <p>{props.item.text}</p>
                    <div>
                        <h4>{props.item.amount}</h4>
                        <sup>{props.item.currency}</sup>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SummaryBox
