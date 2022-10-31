import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { getAPIHealth } from '../axios-services';
import '../style/App.css';
import Portfolio from './Portfolio.js'
import Custom from './Custom.js';
import Header from './Header.js';
import CustomProducts from './CustomProducts.js';
import Requests from './Requests';
import SingleProductView from './SingleProductView.js'
import SingleOrderView from './SingleOrderView';

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    
  }, []);

  return (
    <Router>
      <Header></Header>

      <Routes>
        <Route
          path='/home'
          element={<Portfolio />}>
        </Route>
        <Route
          path='/customize'
          element={<CustomProducts />}>
        </Route>
        <Route
          path='/portfolio'
          element={<Portfolio />}>
        </Route>
        <Route
						path='/portfolio/:id'
						element={<SingleProductView />}
				></Route>
        <Route
          path='/customize/:id'
          element={<Custom />}
        ></Route>
        <Route 
          path='/admin/'
          element={<Requests />}
      ></Route>
      <Route
						path='/admin/orders/:id'
						element={<SingleOrderView />}
				></Route>
      </Routes>
      
      
      
    </Router>
  );
};

export default App;
