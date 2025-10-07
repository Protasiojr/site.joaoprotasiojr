"use client";

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ContributionData {
  month: string;
  contributions: number;
}

interface GitHubResponse {
  user: {
    contributionsCollection: {
      contributionCalendar: {
        weeks: {
          contributionDays: {
            date: string;
            contributionCount: number;
          }[];
        }[];
      };
    };
  };
}

export default function ContributionsChart() {
  const [data, setData] = useState<ContributionData[]>([]);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
        console.log('Token found:', !!token);
        if (!token) {
          console.warn('GitHub token not found, using mock data');
          setData([
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
          ]);
          return;
        }

        const { graphql } = await import('@octokit/graphql');
        const query = `
          query {
            user(login: "Protasiojr") {
              contributionsCollection(from: "2025-01-01T00:00:00Z", to: "2025-12-31T23:59:59Z") {
                contributionCalendar {
                  weeks {
                    contributionDays {
                      date
                      contributionCount
                    }
                  }
                }
              }
            }
          }
        `;
        console.log('Fetching data from GitHub...');
        const result: GitHubResponse = await graphql(query, {
          headers: {
            authorization: `token ${token}`,
          },
        });
        console.log('Data fetched:', result);

        const days = result.user.contributionsCollection.contributionCalendar.weeks.flatMap((week) => week.contributionDays);
        const monthlyData: { [key: string]: number } = {};
        days.forEach((day) => {
          const month = new Date(day.date).toLocaleString('default', { month: 'short' });
          monthlyData[month] = (monthlyData[month] || 0) + day.contributionCount;
        });

        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const dataArray = months.map(month => ({ month, contributions: monthlyData[month] || 0 }));
        console.log('Processed data:', dataArray);
        setData(dataArray);
      } catch (error) {
        console.error('Error fetching contributions:', error);
        // Fallback to mock data
        setData([
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
        ]);
      }
    };

    fetchContributions();
  }, []);

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