import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
`;
  

const About: React.FC = () => {
  return (
    <Section id="about">
        <p>I'm a master's student in Computer Science at Georgia Tech (OMSCS). I enjoy learning both practical skills — such as web development — and theoretical aspects of CS. I'm currently interested in AI agents and am looking for fun project ideas to work on.</p>
        <p>Connect with me on {' '}
            <a href="https://github.com/zakzackr">GitHub</a>{' and '}
            <a href="https://qiita.com/shibainuu">Qiita</a>{'!'}
        </p>
    </Section>
  );
};

export default About;
