import React from "react";
import TechStack from "./TechStack";
import Experience from "./Experience";

const Links: React.FC = () => {
    return (
        <section id="resume" className="mt-10 mb-5">
            <div className="flex gap-4">
                <a href="https://github.com/zakzackr">GitHub</a>
                <a href="https://qiita.com/shibainuu">Qiita</a>
            </div>
        </section>
    );
};

export default Links;
