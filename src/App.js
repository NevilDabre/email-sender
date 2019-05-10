import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/header';
import BodyComponent from './components/body';

function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <BodyComponent></BodyComponent>
    </div>
  );
}

export default App;
