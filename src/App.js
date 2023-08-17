import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/Theme';
import { Container } from './styles/Global.styled';

// import components
import Showcase from './components/Showcase';
import Header from './components/Header';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
          <Header></Header>
          <Showcase id='showcase'/>
      </Container>
    </ThemeProvider>  
  );
}
