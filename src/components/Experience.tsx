import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.div`
  margin-bottom: 40px;
  text-align: center;
  position: relative;

  /* タイムラインの線 */
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #9fc5e8;
  }

  /* タイムラインの開始点の円 */
  .timeline-start {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    width: 12px;
    height: 12px;
    background-color: #9fc5e8;
    border-radius: 50%;
  }

  /* タイムラインの終点の円 */
  .timeline-end {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: 12px;
    height: 12px;
    background-color: #9fc5e8;
    border-radius: 50%;
  }
`;

const ExperienceItem = styled.div`
  position: relative;
  width: 28%; /* ボックスの幅を調整 */
  padding: 20px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 40px 0;
  text-align: left;

  &:nth-child(odd) {
    left: calc(50% - 50px);
    transform: translateX(-100%);
  }

  &:nth-child(even) {
    left: calc(50% + 50px);
  }

  /* タイムラインからボックスへ伸びる水平線 */
  &:after {
    content: '';
    position: absolute;
    top: 30px;
    width: calc(50% - 35%); /* タイムラインからボックスまで均等な長さ */
    height: 2px;
    background-color: #9fc5e8;
  }

  /* 左側のボックス (奇数番目) の線は右側へ伸ばす */
  &:nth-child(odd):after {
    left: 100%; /* ボックスの右端からタイムラインへ伸びる */
  }

  /* 右側のボックス (偶数番目) の線は左側へ伸ばす */
  &:nth-child(even):after {
    right: 100%; /* ボックスの左端からタイムラインへ伸びる */
  }

  /* ボックス上部の色付きバー */
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10px;
    border-radius: 4px 4px 0 0;
  }

  &:nth-child(1):before {
    background-color: #60a5ca;
  }

  &:nth-child(2):before {
    background-color: #4d8ebd;
  }

  &:nth-child(3):before {
    background-color: #4d8ebd;
  }

  &:nth-child(4):before {
    background-color: #285f9e;s
  }
`;


const ExperienceTitle = styled.h3`
  margin: 0;
  font-size: 1.2em;
`;

const ExperienceDate = styled.p`
  margin: 5px 0;
  font-size: 0.9em;
  color: #888;
`;

const ExperienceDescription = styled.p`
  margin: 10px 0 0;
  font-size: 0.9em;
`;

const Experience: React.FC = () => {
  return (
    <ExperienceContainer>
      <div className="timeline-start"></div>
      <ExperienceItem>
        <ExperienceDate>2018.4 - 2023.3</ExperienceDate>
        <ExperienceTitle>同志社大学</ExperienceTitle>
        <ExperienceDescription>
          <p>同志社大学法学部政治学科</p>
          <p>2019年9月〜2020年3月まで半年間大学を休学し、オーストラリアに語学留学</p>
        </ExperienceDescription>
      </ExperienceItem>
      <ExperienceItem>
        <ExperienceDate>2023.8 - 現在</ExperienceDate>
        <ExperienceTitle>Georgia Institute of Technology</ExperienceTitle>
        <ExperienceDescription>
          <p>Georgia Institute of Technology<br/>Online Master of Science in Computer Science</p>
          <p>入学時点でCSの学習を開始してから4ヶ月しか経過していなかったこともあり、入学から現在まで休学しています。就職活動後の2025年5月に復学予定です。</p>
        </ExperienceDescription>
      </ExperienceItem>
      <ExperienceItem>
        <ExperienceDate>2023.12 - 現在</ExperienceDate>
        <ExperienceTitle>株式会社マトリクス</ExperienceTitle>
        <ExperienceDescription>
          <p>株式会社マトリクス（長期インターン）</p>
          <p>病院で使用される医療システムの開発<br/>フロントエンドおよびバックエンド開発を行い、担当ユースケースの設計・実装を担当しています。<br/>e.g. 主要機能の開発、パフォーマンス改善業務、新規ライブラリの導入</p>
          <p>技術スタック<br/>Java, Spring Boot, JavaScript, jQuery, MySQL</p>
        </ExperienceDescription>
      </ExperienceItem>
      <div className="timeline-end"></div>
    </ExperienceContainer>
  );
};

export default Experience;
