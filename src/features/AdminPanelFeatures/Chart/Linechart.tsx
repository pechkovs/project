import React from 'react'
import { Line } from 'react-chartjs-2'

export const options = {
    responsive: true,
    plugins: {
        legend: {
            labels: {
                font: {
                    size: 20,
                    color: '#fff',
                },
            },
        },
    },
}

interface LineChartData {
    labels: string[]
    datasets: {
        data: number[]
    }[]
}
const LineChart: React.FC<{ chartData: LineChartData; chartTitle: string }> = (
    props
) => {
    return <Line data={props.chartData} options={options} />
}

export default LineChart
