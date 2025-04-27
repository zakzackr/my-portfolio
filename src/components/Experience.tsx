import React from 'react';
import styled from 'styled-components';


const Section = styled.section`
  margin-top: 2.5em;
  margin-bottom: 1.25rem;`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ExperienceGroup = styled.div`
  margin-bottom: 1.5rem; 
`;

const Organization = styled.p`
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
`;

const ExperienceItem = styled.li`
  position: relative;
  padding-left: 2rem;
  margin: 0.25rem 0; 

  &::before {
    content: '–';
    color: #92400e;
    position: absolute;
    left: 1rem;
  }
`;

const Experience: React.FC = () => {
  return (
    <Section id="resume">
      <h3>Experience:</h3>

      <ExperienceGroup>
        <Organization>同志社大学 (2018/04 - 2023/03)</Organization>
        <List>
          <ExperienceItem>法学部政治学科</ExperienceItem>
          <ExperienceItem>オーストラリアに留学（2019/09 - 2020/03）</ExperienceItem>
        </List>
      </ExperienceGroup>

      <ExperienceGroup>
        <Organization>Georgia Institute of Technology (2023/08 - Present)</Organization>
        <List>
          <ExperienceItem>Online Master of Science in Computer Science (OMSCS)</ExperienceItem>
        </List>
      </ExperienceGroup>

      <ExperienceGroup>
        <Organization>株式会社マトリクス (2023/12 - Present)</Organization>
        <List>
          <ExperienceItem>病院で使用される医療システムの開発</ExperienceItem>
          <ExperienceItem>主要機能のフロントエンドおよびバックエンド開発を担当</ExperienceItem>
          <ExperienceItem>Java, Spring Boot, JavaScript, jQuery, MySQL</ExperienceItem>
        </List>
      </ExperienceGroup>
      
    </Section>
  );
};

export default Experience;
