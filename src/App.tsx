import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ul>
        <li>HTML/CSS</li>
        <li>JS</li>
        <li>ReactJS</li>
      </ul>
    </div>
  );
}

const Header = () =>{
  return (
    <div>
      <a href="#">Home</a>
      <a href="#">News Feed</a>
      <a href="#">Messages</a>
    </div>
  )
}

export default App;
