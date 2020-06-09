import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import '@/styles/tailwind.css'
import { ApolloProvider } from '@apollo/react-hooks';

import ApolloClient from 'apollo-boost';

/* Redux */
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
});

ReactDOM.render(
  <ReduxProvider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </React.StrictMode>
    </BrowserRouter>
  </ReduxProvider>,
  document.getElementById('root')
);
