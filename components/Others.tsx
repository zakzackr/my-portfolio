import React from "react";
import Links from "./Links"; // Linksコンポーネントのインポート

const Others: React.FC = () => {
    return (
        <section id="others" className="mt-10 mb-5">
            <div>
                <h3 className="text-lg font-bold">Certifications</h3>
                <p>IELTS 7.5</p>
            </div>
            <div>
                <h3 className="text-lg font-bold">Languages</h3>
                <p>Japanese, English(Business level)</p>
            </div>
        </section>
    );
};

export default Others;
