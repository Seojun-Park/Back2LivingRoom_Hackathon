import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './Route'
import { GlobalStyle, theme } from '../styles'
import { ThemeProvider } from 'styled-components'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  )
}

export default App;
