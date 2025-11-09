import React from "react";

const Resume: React.FC = () => {
    return (
        <div className="mb-6">
            {/* Header like GitHub repo file */}
            <div className="border border-gray-200 rounded-lg p-4 sm:p-6">
                <div className="flex items-center text-xs text-gray-600 mb-4 sm:mb-6">
                    <div className="font-mono text-xs">
                        <span className="text-gray-900 font-medium">
                            zakzackr
                        </span>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-900 font-medium">
                            resume
                        </span>
                        <span className="text-gray-500">.md</span>
                    </div>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 pb-2 border-b border-gray-200 mb-6">
                    Experience
                </h2>

                <div className="space-y-8">
                    {/* Matrix Corporation */}
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                    株式会社マトリクス
                                </h3>
                                <p className="text-gray-600 font-medium">
                                    2023/12 - Present | Web Engineer (Intern)
                                </p>
                            </div>
                        </div>

                        {/* Technologies */}
                        <div className="mb-6">
                            <h4 className="text-sm font-medium text-gray-700 mb-2">
                                Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                    Java
                                </span>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    Spring Boot
                                </span>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                    JavaScript
                                </span>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                    jQuery
                                </span>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                    FullCalendar
                                </span>
                            </div>
                        </div>

                        {/* Project Description */}
                        <div className="mb-6">
                            <p className="text-gray-700 leading-relaxed">
                                医療・介護分野向けの勤務表自動作成システム「働き方マイスター」の開発に従事。
                                主要機能のフロントエンドおよびバックエンド開発を担当。
                            </p>
                        </div>

                        {/* Key Achievements */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-medium text-gray-700">
                                Key Achievements
                            </h4>

                            {/* Development Efficiency Achievement */}
                            <div className="bg-white border border-blue-200 rounded-lg p-4">
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                            <svg
                                                className="w-4 h-4 text-blue-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h5 className="font-semibold text-gray-900 mb-1 flex flex-col sm:flex-row sm:items-center gap-2">
                                            <span>開発効率の向上</span>
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                                                カレンダーUIライブラリの導入
                                            </span>
                                        </h5>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            カレンダー機能の開発時に、カレンダーUIの実装コストの大きさに課題を感じたことから、
                                            ライブラリの導入をチームに提案し、ライブラリの選定から導入・実装までを担当。
                                            FullCalendarというライブラリの導入により、車輪の再発明を防ぎ、実装コストを大幅に削減することで、開発効率の向上を実現。
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Performance Achievement */}
                            <div className="bg-white border border-green-200 rounded-lg p-4">
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0">
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                            <svg
                                                className="w-4 h-4 text-green-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h5 className="font-semibold text-gray-900 mb-1 flex flex-col sm:flex-row sm:items-center gap-2">
                                            <span>パフォーマンス改善</span>
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                                                89%向上
                                            </span>
                                        </h5>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            パフォーマンス課題を発見した際には、自身の担当範囲を超えて、Service層およびDAO層のメソッドの新規作成の提案を行い、その設計と実装を通して、最大89％の処理速度の向上を達成。
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Recruitment and Interview Leadership */}
                            <div className="bg-white border border-purple-200 rounded-lg p-4">
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0">
                                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                            <svg
                                                className="w-4 h-4 text-purple-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h5 className="font-semibold text-gray-900 mb-1 flex flex-col sm:flex-row sm:items-center gap-2">
                                            <span>技術面接</span>
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                                                面接官
                                            </span>
                                        </h5>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            新規インターン採用プロセスにおいて、コーディング面接の作問と面接官を担当。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 pb-2 border-b border-gray-200 mb-6 mt-8">
                    Education
                </h2>

                <div className="space-y-6">
                    {/* Georgia Tech */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Georgia Institute of Technology
                        </h3>
                        <p className="text-gray-600 mb-3 font-medium">
                            2023/08 - Present | Online Master of Science in
                            Computer Science (OMSCS)
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>
                                Online Master of Science in Computer Science
                                (OMSCS)
                            </li>
                        </ul>
                    </div>

                    {/* Doshisha University */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            同志社大学
                        </h3>
                        <p className="text-gray-600 mb-3 font-medium">
                            2018/04 - 2023/03 | Bachelor of Political Science
                        </p>
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
                    <p className="text-gray-700">
                        Japanese, English (Business level)
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Resume;
