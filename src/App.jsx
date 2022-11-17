import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Search from './components/Search';
import WishList from './components/WishList';
import Sign from './components/Sign';
function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Sign/>}>
          </Route>
          <Route path="/search" element={<Search/>}>
          </Route>
          <Route path="/wishlist" element={<WishList/>}>
          </Route>
          <Route path="/home" element={<Home/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
