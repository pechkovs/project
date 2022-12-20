import React from 'react'
import SummaryBox from './SummaryBox'
//import {styledSummary} from './Summary.style'
//import {styledSummarybox} from './SummaryBox.style'

interface IsummData {
    icon: string
    text: string
    amount: string
    currency: string
}

const summaryData: IsummData[] = [
    {
        icon: 'akar-icons:shopping-bag',
        text: 'thisMonthSales',
        amount: 'salesAmount',
        currency: 'currency',
    },
    {
        icon: 'icon-park-outline:transaction-order',
        text: 'thisMonthOrders',
        amount: 'orderAmount',
        currency: '',
    },
    {
        icon: 'jam:coin',
        text: 'thisMonthRevenue',
        amount: 'revenueAmount',
        currency: 'currency',
    },
]

function Summary() {
    return (
        <section>
            <p className="subTitle">{'summary'}</p>
            <div>
                {summaryData.map((item) => (
                    <SummaryBox key={item.text} item={item} />
                ))}
            </div>
        </section>
    )
}

export default Summary
