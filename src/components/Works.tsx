import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 100px 20px;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const Works: React.FC = () => {
  return (
    <Section id="works">
      <h3>Works:</h3>
      <p>Coming soon...🐕</p>
    </Section>
  );
};

export default Works;
