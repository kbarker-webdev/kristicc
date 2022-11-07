import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { getAPIHealth } from '../axios-services';
import '../style/App.css';
import Portfolio from './Portfolio.js'
import Custom from './Custom.js';
import Header from './Header.js';
import CustomProducts from './CustomProducts.js';
import Requests from './Requests';
import Login from './Login';
import SingleProductView from './SingleProductView.js'
import SingleOrderView from './SingleOrderView';

const App = () => {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

  useEffect(() => {
    if (localStorage.token && localStorage.username) {
      setUser({
        token: localStorage.token,
        username: localStorage.username,
      });
    }
  }, []);

  return (
    <Router>

      <div className='header-container-app'>
        <Header user={user}></Header>
      </div>
      <div className='main'>
        <Routes>
          <Route
            path='/home'
            element={<Portfolio />}>
          </Route>
          <Route
            path='/login'
            element={<Login
              setUsername={setUsername}
              setPassword={setPassword}
              username={username}
              password={password}
              user={user}
              setUser={setUser}
            />}>
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
      </div>



    </Router>
  );
};

export default App;
