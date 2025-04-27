import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Others from './components/Others';
import Posts from './components/Posts';
import styled from 'styled-components';

const AppContainer = styled.div<{ center: boolean }>`
  font-family: Arial, sans-serif;
  padding: ${(props) => (props.center ? '0' : '4rem')};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.center ? 'center' : 'flex-start')};
  justify-content: ${(props) => (props.center ? 'center' : 'flex-start')};
`;

const ButtonGroup = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
`;

const LinkButton = styled(Link)`
  color: inherit;
  font-size: 1rem;
  cursor: pointer;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-weight: 700;
  text-decoration-color: #C96442;
  text-underline-offset: 3px;
  border-bottom: 2px solid transparent;
  border-bottom-width: 1px;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: #C96442; 
  }
`;

const AppContent: React.FC = () => {
  const location = useLocation(); // ★ここで今のURLを取得

  const centerPage = location.pathname === '/resume' || location.pathname === '/posts'; // ★中央揃えにするページを指定

  return (
    <AppContainer center={centerPage}>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <About />
            <ButtonGroup>
              <LinkButton to="/resume">Resume</LinkButton>
              <LinkButton to="/posts">Posts</LinkButton>
            </ButtonGroup>
          </>
        } />
        <Route path="/resume" element={
          <>
            <ButtonGroup>
              <LinkButton to="/">🐾</LinkButton>
            </ButtonGroup>
            <Resume />
            <Others />
          </>
        } />
        <Route path="/posts" element={
          <>
            <ButtonGroup>
              <LinkButton to="/">🐾</LinkButton>
            </ButtonGroup>
            <Posts />
          </>
        } />
      </Routes>
    </AppContainer>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
