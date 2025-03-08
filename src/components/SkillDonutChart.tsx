import React, { useRef, useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

interface SkillDonutChartProps {
  skill: string;
  percentage: number;
}

const SkillDonutChart: React.FC<SkillDonutChartProps> = ({ skill, percentage }) => {
  const chartRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ['#4ea8de', '#e0e0e0'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '70%',
    animation: isVisible ? { animateRotate: true, duration: 1500 } : false,
    plugins: {
      tooltip: { enabled: false },
    },
  };

  return (
    <div style={{ width: '150px', margin: 'auto', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '10px', border: '1px solid #e0e0e0' }}>
      <div ref={chartRef} style={{ width: '120px', height: '120px', margin: 'auto' }}>
        <Doughnut data={data} options={options} />
      </div>
      <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '10px 0' }} />
      <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '14px' }}>
          {skill}
      </div>
    </div>
  );
};

export default SkillDonutChart;
