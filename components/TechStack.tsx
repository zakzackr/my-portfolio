import React from 'react';

const TechStack: React.FC = () => {
  const languages = [
    { name: 'Java', color: '#f89820', isCore: true },
    { name: 'JavaScript', color: '#f1e05a', isCore: true },
    { name: 'Python', color: '#3572A5', isCore: true },
    { name: 'TypeScript', color: '#2b7489', isCore: false },
  ];

  const technologies = [
    { category: 'Backend', items: ['Spring Boot', 'Spring Security'], core: ['Spring Boot', 'Spring Security'] },
    { category: 'Frontend', items: ['React', 'jQuery', 'Next.js'], core: ['React', 'jQuery'] },
    { category: 'Database', items: ['MySQL'], core: ['MySQL'] },
    { category: 'Infrastructure', items: ['AWS (S3, CloudFront, Elastic Beanstalk, EC2, RDS, Route53, ALB)', 'Docker'], core: ['AWS'] },
    { category: 'CI/CD', items: ['Jenkins'], core: [] },
  ];

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200">Popular languages</h2>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {languages.map((lang) => (
          <span
            key={lang.name}
            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
              lang.isCore ? 'bg-gray-100 text-gray-800 border border-gray-300' : 'bg-gray-50 text-gray-600 border border-gray-200'
            }`}
          >
            <span
              className="w-2 h-2 rounded-full mr-1"
              style={{ backgroundColor: lang.color }}
            />
            {lang.name}
          </span>
        ))}
      </div>

      <h2 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200">Tech Stack</h2>
      
      <div className="space-y-4">
        {technologies.map((tech) => (
          <div key={tech.category} className="github-border p-4 rounded-lg">
            <h3 className="font-semibold text-sm text-gray-700 mb-2">{tech.category}</h3>
            <div className="flex flex-wrap gap-1">
              {tech.items.map((item) => {
                const isCore = tech.core.some(core => item.includes(core));
                return (
                  <span
                    key={item}
                    className={`language-badge ${isCore ? 'font-semibold' : ''}`}
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-600 mt-4 italic">
        太字はコアスキル、それ以外は触れたことのある技術、キャッチアップ中の技術です。
      </p>
    </div>
  );
};

export default TechStack;
