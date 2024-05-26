import Header from "./components/Header"
import Footer from "./components/Footer"

import React from 'react'
import './styles/Header.css';
import {Outlet } from 'react-router-dom';


import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from 'react-router-dom';

function App() {
  return (
    <div className='wrapper'>
      <div><Header /></div>
      <div><Outlet /></div>
      <div><Footer /></div>
    </div>
  );
}

export default App;