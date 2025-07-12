import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { icon: '📊', label: 'Repositories', value: '12' },
    { icon: '⭐', label: 'Stars earned', value: '24' },
    { icon: '📝', label: 'Articles written', value: '8' },
    { icon: '🎓', label: 'Courses completed', value: '15' },
  ];

  const achievements = [
    { name: 'Pull Shark', icon: '🦈', description: 'Opened many pull requests' },
    { name: 'YOLO', icon: '🚀', description: 'Merged a pull request without code review' },
    { name: 'Quickdraw', icon: '⚡', description: 'Closed an issue or pull request within 5 minutes' },
    { name: 'Arctic Code Vault Contributor', icon: '🧊', description: 'Contributed code to the 2020 GitHub Archive Program' },
  ];

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200">Overview</h2>
      
      <div className="grid grid-cols-2 gap-3 mb-6">
        {stats.map((stat) => (
          <div key={stat.label} className="github-border p-3 rounded-lg text-center">
            <div className="text-lg mb-1">{stat.icon}</div>
            <div className="text-xl font-semibold text-gray-900">{stat.value}</div>
            <div className="text-xs text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      <h3 className="text-md font-semibold mb-3">Achievements</h3>
      <div className="grid grid-cols-2 gap-2">
        {achievements.map((achievement) => (
          <div 
            key={achievement.name}
            className="github-border p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            title={achievement.description}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{achievement.icon}</span>
              <span className="text-xs font-medium text-gray-700">{achievement.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;