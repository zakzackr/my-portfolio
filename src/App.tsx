import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Works from './components/Works';
import Others from './components/Others';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Works />
      <Others />
    </AppContainer>
  );
};

export default App;
