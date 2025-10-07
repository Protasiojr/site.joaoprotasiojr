"use client";

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ContributionData {
  month: string;
  contributions: number;
}

export default function ContributionsChart() {
  const data: ContributionData[] = [
    { month: 'Jan', contributions: 45 },
    { month: 'Feb', contributions: 52 },
    { month: 'Mar', contributions: 38 },
    { month: 'Apr', contributions: 61 },
    { month: 'May', contributions: 49 },
    { month: 'Jun', contributions: 55 },
    { month: 'Jul', contributions: 42 },
    { month: 'Aug', contributions: 58 },
    { month: 'Sep', contributions: 47 },
    { month: 'Oct', contributions: 50 },
  ];

  const chartData = {
    labels: data.map(d => d.month),
    datasets: [
      {
        label: 'Contribuições',
        data: data.map(d => d.contributions),
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Contribuições no GitHub - 2025',
      },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Bar data={chartData} options={options} />
    </div>
  );
}