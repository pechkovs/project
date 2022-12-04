import React, { useMemo } from 'react'
import { Bar } from 'react-chartjs-2'

interface IChartData {
    labels: string[]
    datasets: {
        label: string
        data: number[]
    }[]
}

const BarChart: React.FC<{
    chartData: IChartData
    chartTitle: string
}> = (props) => {
    const { chartTitle } = props
    const options = useMemo(
        () => ({
            responsive: true,
            plugins: {
                legend: {
                    position: 'center' as const,
                },
                title: {
                    display: true,
                    text: chartTitle,
                },
            },
        }),
        [chartTitle]
    )
    return <Bar options={options} data={props.chartData} />
}

export default BarChart
