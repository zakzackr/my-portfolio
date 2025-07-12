import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section id="about" className="mt-10 mb-5">
        <div className="flex items-start gap-6 mb-6">
            <div className="flex-shrink-0">
                <Image
                    src="/profile.jpg"
                    alt="Ryuichi Kozaki"
                    width={100}
                    height={100}
                    className="rounded-full object-cover border-2 border-gray-200"
                />
            </div>
            <div className="flex-1">
                <p>I'm a master's student in Computer Science at Georgia Tech (OMSCS). I enjoy learning both practical skills — such as web development — and theoretical aspects of CS.</p>
            </div>
        </div>
        <p className="mt-5">Connect with me on {' '}
            <a href="https://github.com/zakzackr" className="underline decoration-underline-orange underline-offset-1 border-b border-transparent transition-colors hover:border-underline-orange">GitHub</a>{', '}
            <a href="https://qiita.com/shibainuu" className="underline decoration-underline-orange underline-offset-1 border-b border-transparent transition-colors hover:border-underline-orange">Qiita</a>{', and '}
            <a href="https://zenn.dev/shibainuu" className="underline decoration-underline-orange underline-offset-1 border-b border-transparent transition-colors hover:border-underline-orange">Zenn</a>{'!'}
        </p>
    </section>
  );
};

export default About;
