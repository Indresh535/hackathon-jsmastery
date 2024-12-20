
import React from 'react'
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const LineChart = ({ coinHistory, currentPrice, coinName }) => {

    const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    
    <div>

    <p level={2} className="chart-p">{coinName} Price Chart </p>
    <p level={5} className="price-change">Change: {coinHistory?.data?.change}%</p>
    <p level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</p>

       <Line data={data} options={options} />
    </div>
  )
}

export default LineChart
