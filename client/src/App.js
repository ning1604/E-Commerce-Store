import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import About from './pages/About';
import NoMatch from './pages/NoMatch';


function App() {
  return (
      <Router>
        <>
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
              path='/about'
              element={<About />}
            />
            <Route
              path='*'
              element={<NoMatch />}
            />
          </Routes>
          <Footer />
        </>
      </Router>
  );
}

export default App;

// function App() {
//   return (
//     <div className='container'>
//       <Header />
//       <Home />
//       <Footer />
//     </div>
//   );
// }

// export default App;
