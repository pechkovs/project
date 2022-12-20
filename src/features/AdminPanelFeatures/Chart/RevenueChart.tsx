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
import '@emotion/styled'

const RevenueChart: React.FC = () => {
    const [chartData, setChartData] = useState(null)
    useEffect(() => {
        const Revenue = []
        axios.get('/api/admin/adminstats').then((result) => {
            for (const dataObj of result.data.data) {
                Revenue.push(parseInt(dataObj.monthly_revenue))
            }
            setChartData({
                labels: data.checkPoints.labels.map((month) => month),
                datasets: [
                    {
                        label: 'Прибыль',
                        data: Revenue,
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

    const [ActiveChart, setActiveChart] = useState('Pie')

    if (chartData === null) {
        return <div>loading</div>
    }

    return (
        <>
            <StyledChart>
                <ChartButton onClick={() => setActiveChart('Bar')}>
                    Bar
                </ChartButton>
                <ChartButton onClick={() => setActiveChart('Line')}>
                    Line
                </ChartButton>
                <ChartButton onClick={() => setActiveChart('Pie')}>
                    Pie
                </ChartButton>
                <ChartContainer>
                    {ActiveChart === 'Pie' && (
                        <ChartWrapper>
                            <PieChart
                                chartData={chartData}
                                chartTitle={`${'Прибыль'}`}
                            />
                        </ChartWrapper>
                    )}
                    {ActiveChart === 'Bar' && (
                        <ChartWrapper>
                            <BarChart
                                chartData={chartData}
                                chartTitle={`${'Прибыль'}`}
                            />
                        </ChartWrapper>
                    )}

                    {ActiveChart === 'Line' && (
                        <ChartWrapper>
                            <LineChart
                                chartData={chartData}
                                chartTitle={'Прибыль'}
                            />
                        </ChartWrapper>
                    )}
                </ChartContainer>
            </StyledChart>
        </>
    )
}

export default RevenueChart
