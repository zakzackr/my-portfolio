import React from "react";

const Projects: React.FC = () => {
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
                            projects
                        </span>
                        <span className="text-gray-500">.md</span>
                    </div>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 pb-2 border-b border-gray-200 mb-4 sm:mb-6">
                    Projects
                </h2>

                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    Currently working on an iOS app related to food and dining.
                </p>
            </div>
        </div>
    );
};

export default Projects;
