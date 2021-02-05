import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './Route'
import { HashRouter as Router } from 'react-router-dom'
import { GlobalStyle, theme } from '../styles'
import { ThemeProvider } from 'styled-components'


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AppRouter />
      </Router>
    </ThemeProvider>
  )
}

export default App;
