import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const Header: React.FC = () => {
  return (
    <Section id="header">
        <h2>Ryuichi Kozaki</h2>
    </Section>
  );
};

export default Header;
