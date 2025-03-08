import React from 'react';
import styled from 'styled-components';
import Links from './Links'; // Linksコンポーネントのインポート

const Section = styled.section`
  padding: 100px 20px;
  min-height: 40vh;
  background-color: #c0c0c0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.2rem;
`;

const Others: React.FC = () => {
  return (
    <Section id="others">
      <div>
        <h2>Certifications</h2>
        <p>IELTS 7.5</p>
      </div>
      <div>
        <h2>Languages</h2>
        <p>Japanese, English(Business level)</p>
      </div>
      <Links /> {/* Linksコンポーネントの追加 */}
    </Section>
  );
};

export default Others;
