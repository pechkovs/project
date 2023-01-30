import axios from 'axios'
import React, { useState, useEffect } from 'react'
import LineChart from './LineChart'
import BarChart from './BarChart'
import PieChart from './PieChart'
import data from '../../../_data_/AdminData'
import { ChartWrapper } from './charts.style'
import { ChartContainer } from './charts.style'
import { StyledChart } from './charts.style'
import { ChartButton } from '../../../features/AdminPanelFeatures/ChartButton/ChartButton'
import { useAppDispatch, useAppSelector } from '../../../_data_/store/hooks'
import {
    isBarOrdersChart,
    isLineOrdersChart,
    isPieOrdersChart,
    ordersChartActions,
} from '../../../_data_/store/ordersSlice'

const OrdersChart: React.FC = () => {
    const [chartData, setChartData] = useState(null)
    useEffect(() => {
        const Orders = []
        axios.get('/api/admin/adminstats').then((result) => {
            for (const dataObj of result.data.adminstats) {
                Orders.push(parseInt(dataObj.monthly_orders))
            }
            setChartData({
                labels: data.checkPoints.labels.map((month) => month),
                datasets: [
                    {
                        label: 'Заказы',
                        data: Orders,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                        ],
                        borderWidth: 1,
                    },
                ],
            })
            console.log(result.data)
        })
    }, [])

    const dispatch = useAppDispatch()
    const isPieChart = useAppSelector(isPieOrdersChart)
    const isBarChart = useAppSelector(isBarOrdersChart)
    const isLineChart = useAppSelector(isLineOrdersChart)

    if (chartData === null) {
        return <div>loading</div>
    }
    return (
        <>
            <StyledChart>
                <ChartButton
                    onClick={() =>
                        dispatch(ordersChartActions.switchMode('Bar'))
                    }
                >
                    Bar
                </ChartButton>
                <ChartButton
                    onClick={() =>
                        dispatch(ordersChartActions.switchMode('Line'))
                    }
                >
                    Line
                </ChartButton>
                <ChartButton
                    onClick={() =>
                        dispatch(ordersChartActions.switchMode('Pie'))
                    }
                >
                    Pie
                </ChartButton>
                <ChartContainer>
                    {isPieChart && (
                        <ChartWrapper>
                            <PieChart
                                chartData={chartData}
                                chartTitle={`${'Заказы'}`}
                            />
                        </ChartWrapper>
                    )}
                    {isBarChart && (
                        <ChartWrapper>
                            <BarChart
                                chartData={chartData}
                                chartTitle={`${'Заказы'}`}
                            />
                        </ChartWrapper>
                    )}
                    {isLineChart && (
                        <ChartWrapper>
                            <LineChart
                                chartData={chartData}
                                chartTitle={`${'Заказы'}`}
                            />
                        </ChartWrapper>
                    )}
                </ChartContainer>
            </StyledChart>
        </>
    )
}

export default OrdersChart
