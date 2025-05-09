import React from 'react';
import TechStack from './TechStack';
import Experience from './Experience';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="mt-10 mb-5">
      <TechStack />
      <Experience />
    </section>
  );
};

export default Resume;
