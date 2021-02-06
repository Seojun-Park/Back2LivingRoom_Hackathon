import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './Route'
import { HashRouter as Router } from 'react-router-dom'
import { GlobalStyle, theme } from '../styles'
import { ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href={`https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap`} rel="stylesheet" />
      </Helmet>
      <GlobalStyle />
      <Router>
        <AppRouter />
      </Router>
    </ThemeProvider>
  )
}

export default App;
