import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Footer from './components/Footer/index';
import Navbar from './components/Navbar/index'
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import About from './pages/About';
import NoMatch from './pages/NoMatch';
import { StoreProvider } from './utils/GlobalState';
import SingleProduct from './pages/SingleProduct';
import Login from './pages/Login';
import Signup from './pages/Signup';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <StoreProvider>
            <Navbar />
            <Routes>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='/shop'
                element={<ProductList />}
              />
              <Route
                path='/products/:id'
                element={<SingleProduct />}
              />
              <Route
                path='/about'
                element={<About />}
              />
              <Route
                path='/login'
                element={<Login />}
              />
              <Route
                path='/signup'
                element={<Signup />}
              />
              <Route
                path='*'
                element={<NoMatch />}
              />
            </Routes>
            <Footer />
          </StoreProvider>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
