import React from 'react';
import styled from 'styled-components';
import TechStack from './TechStack';
import Experience from './Experience';

const Section = styled.section`
  margin-top: 2.5em;
  margin-bottom: 1.25rem;
`;

const LinkWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Links: React.FC = () => {
  return (
    <Section id="resume">
      <LinkWrapper>
        <a href="https://github.com/zakzackr">GitHub</a>
        <a href="https://qiita.com/shibainuu">Qiita</a>
      </LinkWrapper>
    </Section>
  );
};

export default Links;


