import React, { useState } from 'react'
import { faker } from '@faker-js/faker'
import LineChart from './LineChart'
import BarChart from './BarChart'
import PieChart from './PieChart'
import data from '../../../components/constants/data'
import { ChartWrapper } from './charts.style'
import { ChartContainer } from './charts.style'
import { StyledChart } from './charts.style'

const SalesChart = () => {
    const labels = data.revenueByMonths.labels.map((month) => month)
    const [salesData] = useState({
        labels,
        datasets: [
            {
                label: 'Продажи',
                data: labels.map(() =>
                    faker.datatype.number({ min: 0, max: 1000 })
                ),
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
                <ChartContainer>
                    <button onClick={() => setActiveChart('Bar')}>Bar</button>
                    <button onClick={() => setActiveChart('Line')}>Line</button>
                    <button onClick={() => setActiveChart('Pie')}>Pie</button>
                    {ActiveChart === 'Pie' && (
                        <ChartWrapper>
                            <PieChart
                                chartData={salesData}
                                chartTitle={`${'Продажи'}`}
                            />
                        </ChartWrapper>
                    )}
                    {ActiveChart === 'Bar' && (
                        <ChartWrapper>
                            <BarChart
                                chartData={salesData}
                                chartTitle={`${'Продажи'}`}
                            />
                        </ChartWrapper>
                    )}

                    {ActiveChart === 'Line' && (
                        <ChartWrapper>
                            <LineChart
                                chartData={salesData}
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