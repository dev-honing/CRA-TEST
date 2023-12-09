// src/App.tsx

import React from 'react';
import Header from './components/Header';
import Container from './components/Container';
import './App.css';


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Container />
    </div>
  );
}

export default App;
