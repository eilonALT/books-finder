import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Form
} from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Search from './components/Search';
import WishList from './components/WishList';
import Sign from './components/Sign';
import Error from './components/Error';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Sign />}>
          </Route>
          <Route path="/search" element={<Search />}>
          </Route>
          <Route path="/wishlist" element={<WishList />}>
          </Route>
          <Route path="/home" element={<Home />}>
          </Route>
          <Route path="/*" element={<Error />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
