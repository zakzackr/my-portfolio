import React from 'react';
import styled from 'styled-components';
import TechStack from './TechStack';
import Experience from './Experience';

const Section = styled.section`
  margin-top: 2.5em;
  margin-bottom: 1.25rem;
  height: 100vh; /* ← 画面いっぱいに高さを取る！ */
  width: 100%;   /* ← 画面いっぱいに幅を取る（optionalだけどきれい） */
  margin: 0;     /* ← 上下マージンいらないなら消す */
  display: flex;
  justify-content: center; /* 横方向中央 */
  align-items: center;     /* 縦方向中央 */
  flex-direction: column;  /* ← 縦並びにするならこれも */
`;

const Resume: React.FC = () => {
  return (
    <Section id="resume"> 
      <TechStack></TechStack>
      <Experience></Experience>
    </Section>
  );
};

export default Resume;
