import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 100px 20px;
  min-height: 20vh;
  background-color: #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const About: React.FC = () => {
  return (
    <Section id="about">
        <h2>About</h2>
        <p>Georgia Institute of TechnologyのOMSCSに在籍中です。スタートアップで Web エンジニアの長期インターンをしています。</p>
    </Section>
  );
};

export default About;
