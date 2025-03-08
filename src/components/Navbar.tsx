import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: #333;
  color: #fff;
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  z-index: 1000;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar: React.FC = () => {
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Nav>
      <NavLink href="#home" onClick={() => handleScroll('home')}>HOME</NavLink>
      <NavLink href="#about" onClick={() => handleScroll('about')}>ABOUT</NavLink>
      <NavLink href="#resume" onClick={() => handleScroll('resume')}>RESUME</NavLink>
      <NavLink href="#works" onClick={() => handleScroll('works')}>WORKS</NavLink>
      <NavLink href="#others" onClick={() => handleScroll('others')}>OTHERS</NavLink>
    </Nav>
  );
};

export default Navbar;
