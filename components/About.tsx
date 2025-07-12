import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <div className="pb-6 mb-6 border-b border-gray-200">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <Image
            src="/profile.jpg"
            alt="Ryuichi Kozaki"
            width={64}
            height={64}
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-xl font-semibold">Ryuichi Kozaki</h1>
            <span className="text-gray-600 font-normal">zakzackr</span>
          </div>
          <p className="text-gray-700 mb-3 text-sm">
            I'm a master's student in Computer Science at Georgia Tech (OMSCS). I enjoy learning both practical skills — such as web development — and theoretical aspects of CS.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Tokyo, Japan
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <a href="https://github.com/zakzackr" className="flex items-center gap-1 hover:text-blue-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
            <a href="https://qiita.com/shibainuu" className="flex items-center gap-1 hover:text-blue-600">
              📝 Qiita
            </a>
            <a href="https://zenn.dev/shibainuu" className="flex items-center gap-1 hover:text-blue-600">
              ⚡ Zenn
            </a>
          </div>
        </div>
        <div className="flex-shrink-0">
          <button className="px-3 py-1 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 transition-colors">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
