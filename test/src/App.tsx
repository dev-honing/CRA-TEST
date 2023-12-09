// src/App.tsx

import React from 'react';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import './App.css';


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
