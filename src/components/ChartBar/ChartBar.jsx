import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

import { options } from './options'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip)

export const ChartBar = ({ data }) => {
  const maxAmount = Math.max(...data.map((item) => item.amount))

  const dataConfig = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        backgroundColor: data.map((item) => {
          return item.amount == maxAmount ? '#1a237e' : '#3c3c43'
        }),
        data: data.map((item) => item.amount),
        borderRadius: 5
      }
    ]
  }

  return <Bar data={dataConfig} options={options} />
}
