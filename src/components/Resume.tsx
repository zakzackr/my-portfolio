import React from 'react';
import styled from 'styled-components';
import SkillDonutChart from './SkillDonutChart';
import Experience from './Experience';

const Section = styled.section`
  padding: 100px 20px;
  min-height: 60vh;
  background-color: #d0d0d0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TechRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  margin-bottom: 40px;
`;

const Resume: React.FC = () => {
  return (
    <Section id="resume"> 
      <h2>Experience</h2>
      <Experience />
      <h2>Tech Stack</h2>
      <TechRow>
        <SkillDonutChart skill="Java" percentage={80} />
        <SkillDonutChart skill="Spring Boot" percentage={80} />
        <SkillDonutChart skill="JavaScript" percentage={70} />
        <SkillDonutChart skill="React" percentage={60} />
      </TechRow>
      <TechRow>
        <SkillDonutChart skill="jQuery" percentage={70} />
        <SkillDonutChart skill="Python" percentage={80} />
        <SkillDonutChart skill="Git" percentage={80} />
        <SkillDonutChart skill="HTML/CSS" percentage={70} />
      </TechRow>
    </Section>
  );
};

export default Resume;
