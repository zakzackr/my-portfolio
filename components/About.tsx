import React from "react";

const About: React.FC = () => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span>👨‍💻</span>
                About
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                    I'm a master's student in Computer Science at Georgia Tech
                    (OMSCS), where I enjoy learning both practical skills — such
                    as web development — and theoretical aspects of CS.
                </p>
                <p>
                    Currently working as a software engineer at Matrix
                    Corporation, developing healthcare scheduling systems using
                    Java (Spring Boot) and JavaScript. I'm passionate about
                    improving development efficiency and system performance.
                </p>
                <p>
                    My educational background includes a Bachelor's degree in
                    Political Science from Doshisha University, with study
                    abroad experience in Australia. This diverse background
                    helps me approach technical problems from different
                    perspectives.
                </p>
                <p>
                    I actively share my learning journey through technical
                    writing on platforms like Qiita and Zenn, covering topics
                    from web development to computer science fundamentals.
                </p>
            </div>
        </div>
    );
};

export default About;
