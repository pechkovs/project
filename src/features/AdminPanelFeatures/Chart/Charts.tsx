import React from 'react'
import SalesChart from './SalesChart'
import OrdersChart from './OrdersChart'
import RevenueChart from './RevenueChart'
import { ChartBox, Chartier } from './charts.style'

const Charts = () => {
    return (
        <>
            <main>
                <Chartier>
                    <ChartBox>
                        <SalesChart />
                    </ChartBox>
                    <ChartBox>
                        <RevenueChart />
                    </ChartBox>
                    <ChartBox>
                        <OrdersChart />
                    </ChartBox>
                </Chartier>
            </main>
        </>
    )
}
export default Charts
