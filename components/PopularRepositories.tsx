import React from 'react';

const PopularRepositories: React.FC = () => {
  const repositories = [
    {
      name: 'my-portfolio',
      description: 'Personal portfolio website built with Next.js',
      language: 'TypeScript',
      languageColor: '#3178c6',
      stars: 2,
      forks: 0,
      isPublic: true
    },
    {
      name: 'spring-security-demo',
      description: 'Spring Security implementation examples',
      language: 'Java',
      languageColor: '#b07219',
      stars: 5,
      forks: 1,
      isPublic: true
    }
  ];

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-900">
        Popular repositories
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repositories.map((repo) => (
          <div key={repo.name} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-blue-600 hover:underline cursor-pointer">
                {repo.name}
              </h3>
              <span className="text-xs text-gray-500 border border-gray-300 rounded-full px-2 py-0.5">
                {repo.isPublic ? 'Public' : 'Private'}
              </span>
            </div>
            
            <p className="text-sm text-gray-600 mb-3">
              {repo.description}
            </p>
            
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <span 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: repo.languageColor }}
                  ></span>
                  <span>{repo.language}</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/>
                  </svg>
                  <span>{repo.stars}</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878z"/>
                  </svg>
                  <span>{repo.forks}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularRepositories;