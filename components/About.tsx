import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="mt-10 mb-5">
        <p>I'm a master's student in Computer Science at Georgia Tech (OMSCS). I enjoy learning both practical skills — such as web development — and theoretical aspects of CS. I'm currently interested in AI agents and am looking for fun project ideas to work on.</p>
        <p className="mt-5">Connect with me on {' '}
            <a href="https://github.com/zakzackr" className="underline decoration-underline-orange underline-offset-1 border-b border-transparent transition-colors hover:border-underline-orange">GitHub</a>{' and '}
            <a href="https://qiita.com/shibainuu" className="underline decoration-underline-orange underline-offset-1 border-b border-transparent transition-colors hover:border-underline-orange">Qiita</a>{'!'}
        </p>
    </section>
  );
};

export default About;
