'use client';

import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Detection {
  image_path: string;
  result: {
    is_fake: boolean;
    confidence: number;
  };
  timestamp: string;
}

interface Stats {
  _id: boolean;
  count: number;
  avg_confidence: number;
}

export default function StatsPage() {
  const [detections, setDetections] = useState<Detection[]>([]);
  const [stats, setStats] = useState<Stats[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [detectionsRes, statsRes] = await Promise.all([
          fetch('http://localhost:8000/detections'),
          fetch('http://localhost:8000/stats')
        ]);
        
        const detectionsData = await detectionsRes.json();
        const statsData = await statsRes.json();
        
        setDetections(detectionsData);
        setStats(statsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const chartData = {
    labels: detections.map(d => new Date(d.timestamp).toLocaleDateString()),
    datasets: [
      {
        label: 'Confidence Score',
        data: detections.map(d => d.result.confidence),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Deepfake Detection Statistics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {stats.map(stat => (
          <div key={String(stat._id)} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">
              {stat._id ? 'Fake Images' : 'Real Images'}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 dark:text-gray-400">Total</p>
                <p className="text-2xl font-bold">{stat.count}</p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400">Avg. Confidence</p>
                <p className="text-2xl font-bold">{(stat.avg_confidence * 100).toFixed(1)}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Detection History</h2>
        <div className="h-[400px]">
          <Line 
            data={chartData} 
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                  max: 1,
                },
              },
            }} 
          />
        </div>
      </div>
    </div>
  );
}
