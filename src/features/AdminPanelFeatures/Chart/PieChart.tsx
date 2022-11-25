import React, { useMemo } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend)

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
