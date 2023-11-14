export const options = {
  responsive: true,
  plugins: {
    tooltip: {
      callbacks: {
        label: (item) => `C$ ${item.formattedValue.replace(',', '.')}`
      }
    }
  },
  scales: {
    y: {
      ticks: {
        display: false
      },
      grid: {
        display: false,
        drawOnChartArea: false
      },
      border: {
        display: false
      }
    },
    x: {
      grid: {
        display: false,
        drawOnChartArea: false
      },
      border: {
        display: false
      }
    }
  }
}
