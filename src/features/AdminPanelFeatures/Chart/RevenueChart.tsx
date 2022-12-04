import React, { useState } from 'react'
//import { faker } from '@faker-js/faker'
import LineChart from './LineChart'
import BarChart from './BarChart'
import PieChart from './PieChart'
import data from '../../../_data_/AdminData'
import { ChartWrapper } from './charts.style'
import { ChartContainer } from './charts.style'
import { StyledChart } from './charts.style'
import { ChartButton } from '../../../features/AdminPanelFeatures/ChartButton/ChartButton'
import '@emotion/styled'

const myChart = () => {
    const labels = data.revenueByMonths.labels.map((month) => month)
    const [revData] = useState({
        labels,
        datasets: [
            {
                label: 'Прибыль',
                data: data.revenueByMonths.data,
                borderColor: '#bf9270',
                backgroundColor: [
                    '#bf9270',
                    '#FFD166',
                    '#118AB2',
                    '#06D6A0',
                    '#EF476F',
                    '#3844ec',
                    '#667dff',
                    '#16b211',
                    '#d67c06',
                    '#d606a2',
                    '#c2ef47',
                    '#47e9ef',
                ],
            },
        ],
    })

    const [ActiveChart, setActiveChart] = useState('Pie')

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
                                chartData={revData}
                                chartTitle={`${'Прибыль'}`}
                            />
                        </ChartWrapper>
                    )}
                    {ActiveChart === 'Bar' && (
                        <ChartWrapper>
                            <BarChart
                                chartData={revData}
                                chartTitle={`${'Прибыль'}`}
                            />
                        </ChartWrapper>
                    )}

                    {ActiveChart === 'Line' && (
                        <ChartWrapper>
                            <LineChart
                                chartData={revData}
                                chartTitle={'Прибыль'}
                            />
                        </ChartWrapper>
                    )}
                </ChartContainer>
            </StyledChart>
        </>
    )
}

export default myChart
