import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-top: 2.5em;
  margin-bottom: 1.25rem;
  
`

const TechStack: React.FC = () => {
  return (
    <Section id="header">
        <h3>Tech Stack:</h3>
        <p>Java, Spring Boot, JavaScript, jQuery, React, Python, MySQL, AWS, Git etc...</p>
    </Section>
  );
};

export default TechStack;
