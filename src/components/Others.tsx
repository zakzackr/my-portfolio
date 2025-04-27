import React from 'react';
import styled from 'styled-components';
import Links from './Links'; // Linksコンポーネントのインポート

const Section = styled.section`
  margin-top: 2.5em;
  margin-bottom: 1.25rem;
`;

const Others: React.FC = () => {
  return (
    <Section id="others">
      <div>
        <h3>Certifications:</h3>
        <p>IELTS 7.5</p>
      </div>
      <div>
        <h3>Languages:</h3>
        <p>Japanese, English(Business level)</p>
      </div>
    </Section>
  );
};

export default Others;
