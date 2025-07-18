import React from "react";

const TLDR: React.FC = () => {
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
                            README
                        </span>
                        <span className="text-gray-500">.md</span>
                    </div>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 pb-2 border-b border-gray-200 mb-4">
                    TL;DR
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    Software Engineer in Japan.
                </p>
                <ul className="list-disc ml-4 text-sm text-gray-700 leading-relaxed space-y-1 sm:space-y-2">
                    <li>Currently interested in Golang and AI agents.</li>
                    <li>
                        Working on{" "}
                        <a
                            href="https://github.com/zakzackr/mogumogu"
                            className="text-blue-600 hover:underline"
                        >
                            this fun project
                        </a>{" "}
                        at the moment!!
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default TLDR;
