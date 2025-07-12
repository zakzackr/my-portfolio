import React from "react";

const TLDR: React.FC = () => {
    return (
        <div className="mb-6">
            {/* Header like GitHub repo file */}
            <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center text-xs text-gray-600 mb-6">
                    <div className="font-mono text-xs">
                        <span className="text-gray-900 font-medium">
                            zakzackr
                        </span>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-900 font-medium">
                            README
                        </span>
                        <span className="text-gray-500">.md</span>
                    </div>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 pb-2 border-b border-gray-200 mb-4">
                    TL;DR
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                    Software Engineer in Japan. Currently interested in Golang
                    and AI agents.
                </p>
            </div>
        </div>
    );
};

export default TLDR;
