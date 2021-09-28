import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { client } from './App';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import GlobalStyle from './theme/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
  <ApolloProvider client={client}>
  <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


