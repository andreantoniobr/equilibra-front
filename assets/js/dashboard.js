(() => {
  'use strict'

  const ctx = document.getElementById('despensesByCategory')

  const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: [
        'Alimentação',
        'Educação',
        'Lazer',
        'Compras' 
      ],
      datasets: [{
        label: 'Valor',
        data: [204, 550, 157, 90],
        backgroundColor: [
          'rgb(124, 58, 237)',
          'rgb(54, 162, 235)', 
          'rgb(255, 205, 86)',
          'rgb(255, 99, 132)'
        ],
        borderWidth: 0,        
        hoverBorderWidth: 0   
      }]
    },
    options: {
    plugins: {
      legend: {
        display: false
      }
    }
  }
  })
})()
