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
import { useAppDispatch, useAppSelector } from '../../../_data_/store//hooks'
import {
    isBarSalesChart,
    isLineSalesChart,
    isPieSalesChart,
    salesChartActions,
} from '../../../_data_/store/salesSlice'
import { getConfigValue } from '@ijl/cli'

const SalesChart: React.FC = () => {
    const [chartData, setChartData] = useState(null)
    useEffect(() => {
        const Sales = []
        const BaseApiUrl = getConfigValue('sugarbun.baseApiUrl')
        console.log(BaseApiUrl)
        axios.get(BaseApiUrl + '/admin/adminstats').then((result) => {
            for (const dataObj of result.data.adminstats) {
                Sales.push(parseInt(dataObj.monthly_sales))
            }
            setChartData({
                labels: data.checkPoints.labels.map((month) => month),
                datasets: [
                    {
                        label: 'Продажи',
                        data: Sales,
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
    const isPieChart = useAppSelector(isPieSalesChart)
    const isBarChart = useAppSelector(isBarSalesChart)
    const isLineChart = useAppSelector(isLineSalesChart)

    if (chartData === null) {
        return <div>loading</div>
    }

    return (
        <>
            <StyledChart>
                <ChartContainer>
                    <ChartButton
                        onClick={() =>
                            dispatch(salesChartActions.switchMode('Bar'))
                        }
                    >
                        Bar
                    </ChartButton>
                    <ChartButton
                        onClick={() =>
                            dispatch(salesChartActions.switchMode('Line'))
                        }
                    >
                        Line
                    </ChartButton>
                    <ChartButton
                        onClick={() =>
                            dispatch(salesChartActions.switchMode('Pie'))
                        }
                    >
                        Pie
                    </ChartButton>
                    {isPieChart && (
                        <ChartWrapper>
                            <PieChart
                                chartData={chartData}
                                chartTitle={`${'Продажи'}`}
                            />
                        </ChartWrapper>
                    )}
                    {isBarChart && (
                        <ChartWrapper>
                            <BarChart
                                chartData={chartData}
                                chartTitle={`${'Продажи'}`}
                            />
                        </ChartWrapper>
                    )}

                    {isLineChart && (
                        <ChartWrapper>
                            <LineChart
                                chartData={chartData}
                                chartTitle={`${'Продажи'}`}
                            />
                        </ChartWrapper>
                    )}
                </ChartContainer>
            </StyledChart>
        </>
    )
}

export default SalesChart
