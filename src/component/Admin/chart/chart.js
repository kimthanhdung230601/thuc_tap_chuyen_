import React from 'react';
import { Line } from 'react-chartjs-2';

const MonthlyStatistics = () => {
  const data = {
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6'],
    datasets: [
      {
        label: 'Số tiền (triệu đồng)',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default MonthlyStatistics;
