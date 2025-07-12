import React from "react";

const Experience: React.FC = () => {
    return (
        <section id="experience" className="mt-2 mb-5">
            <div className="mb-6">
                <p className="font-bold mb-2">同志社大学 (2018/04 - 2023/03)</p>
                <ul className="list-none p-0 m-0">
                    <li className="relative pl-6 mb-1">
                        <span className="absolute left-2 text-brown-800">
                            –
                        </span>
                        法学部政治学科
                    </li>
                    <li className="relative pl-6 mb-1">
                        <span className="absolute left-2 text-brown-800">
                            –
                        </span>
                        オーストラリアに留学（2019/09 - 2020/03）
                    </li>
                </ul>
            </div>

            <div className="mb-6">
                <p className="font-bold mb-2">
                    Georgia Institute of Technology (2023/08 - Present)
                </p>
                <ul className="list-none p-0 m-0">
                    <li className="relative pl-6 mb-1">
                        <span className="absolute left-2 text-brown-800">
                            –
                        </span>
                        Online Master of Science in Computer Science (OMSCS)
                    </li>
                </ul>
            </div>

            <div className="mb-6">
                <p className="font-bold mb-2">
                    株式会社マトリクス (2023/12 - Present)
                </p>
                <ul className="list-none p-0 m-0">
                    <li className="relative pl-6 mb-1">
                        <span className="absolute left-2 text-brown-800">
                            –
                        </span>
                        医療・介護分野向けの勤務表自動作成システム「看護配置マイスター」の開発
                    </li>
                    <li className="relative pl-6 mb-1">
                        <span className="absolute left-2 text-brown-800">
                            –
                        </span>
                        Java(Spring Boot)を使用したAPIの設計・実装
                    </li>
                    <li className="relative pl-6 mb-5">
                        <span className="absolute left-2 text-brown-800">
                            –
                        </span>
                        JavaScript(jQuery)を使用したフロントエンドの設計・実装
                    </li>
                    <li className="relative pl-6 mb-1">
                        <span className="absolute left-2 text-brown-800">
                            –
                        </span>
                        開発効率の向上（新規ライブラリ導入の主導）
                    </li>
                    <p className="pl-6">
                        カレンダー機能の開発時に、カレンダーUIの実装コストの大きさに課題を感じたことから、FullCalendarというライブラリの導入をチームに提案し、技術調査から導入・実装までを主導しました。これにより、カレンダーUIの実装コストを大幅に削減し、開発効率の向上を実現しました。
                    </p>
                    <li className="relative pl-6 mb-1">
                        <span className="absolute left-2 text-brown-800">
                            –
                        </span>
                        パフォーマンス改善（89%向上）
                    </li>
                    <p className="pl-6">
                        パフォーマンス課題を発見した際には、自身の守備範囲を超えて、Service層およびDAO層のメソッドの新規作成の提案を行い、その設計と実装を通して、最大89％の処理速度の向上を達成しました。
                    </p>
                </ul>
            </div>
        </section>
    );
};

export default Experience;
