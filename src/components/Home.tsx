import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 100px 20px;
  min-height: 100vh;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  animation: walk 3s infinite alternate;

  @keyframes walk {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateY(20px);
    }
  }
`;

const Home: React.FC = () => {
  return (
    <Section id="home">
      I am Ryuichi Kozaki🐾
    </Section>
  );
};

export default Home;
