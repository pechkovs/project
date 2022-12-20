import React, { useMemo } from 'react'
import { Pie } from 'react-chartjs-2'

interface PieChartData {
    labels: string[]
    datasets: {
        data: number[]
    }[]
}

const PieChart: React.FC<{
    chartData: PieChartData
    chartTitle: string
}> = (props) => {
    console.log('chartData', props.chartData)
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
    return <Pie options={options} data={props.chartData} />
}

export default PieChart
