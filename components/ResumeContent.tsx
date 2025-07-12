import React from 'react';

const ResumeContent: React.FC = () => {
  return (
    <div className="mb-6">
      {/* Header like GitHub repo file */}
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4 1.75C4 .784 4.784 0 5.75 0h5.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 14.25 16h-8.5A1.75 1.75 0 0 1 4 14.25V1.75zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5H5.75zm6.75.062V4.25c0 .138.112.25.25.25h2.688a.252.252 0 0 0-.011-.013l-2.914-2.914a.246.246 0 0 0-.013-.011z"/>
          </svg>
          <span className="font-medium">zakzackr</span>
          <span>/</span>
          <span className="font-bold">resume.md</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 pb-2 border-b border-gray-200 mb-6">
          Experience
        </h2>

        <div className="space-y-6">
          {/* Matrix Corporation */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              株式会社マトリクス
            </h3>
            <p className="text-gray-600 mb-3 font-medium">2023/12 - Present | Software Engineer</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>医療・介護分野向けの勤務表自動作成システム「看護配置マイスター」の開発</li>
              <li>Java (Spring Boot) を使用したAPIの設計・実装</li>
              <li>JavaScript (jQuery) を使用したフロントエンドの設計・実装</li>
              <li className="font-semibold">開発効率の向上（新規ライブラリ導入の主導）</li>
              <li className="ml-6 text-sm text-gray-600">
                カレンダー機能の開発時に、カレンダーUIの実装コストの大きさに課題を感じたことから、
                FullCalendarというライブラリの導入をチームに提案し、技術調査から導入・実装までを主導。
                これにより、カレンダーUIの実装コストを大幅に削減し、開発効率の向上を実現。
              </li>
              <li className="font-semibold">パフォーマンス改善（89%向上）</li>
              <li className="ml-6 text-sm text-gray-600">
                パフォーマンス課題を発見した際には、自身の守備範囲を超えて、Service層およびDAO層の
                メソッドの新規作成の提案を行い、その設計と実装を通して、最大89％の処理速度の向上を達成。
              </li>
            </ul>
          </div>

          {/* Georgia Tech */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Georgia Institute of Technology
            </h3>
            <p className="text-gray-600 mb-3 font-medium">2023/08 - Present | MS Computer Science Student</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Online Master of Science in Computer Science (OMSCS)</li>
              <li>Focus on software engineering, algorithms, and system design</li>
            </ul>
          </div>

          {/* Doshisha University */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              同志社大学
            </h3>
            <p className="text-gray-600 mb-3 font-medium">2018/04 - 2023/03 | Bachelor's Degree</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>法学部政治学科</li>
              <li>オーストラリアに留学（2019/09 - 2020/03）</li>
            </ul>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 pb-2 border-b border-gray-200 mb-4 mt-8">
          Certifications
        </h2>
        
        <div className="space-y-3">
          <p className="text-gray-700">IELTS 7.5</p>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 pb-2 border-b border-gray-200 mb-4 mt-8">
          Languages
        </h2>
        
        <div className="space-y-3">
          <p className="text-gray-700">Japanese, English (Business level)</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeContent;