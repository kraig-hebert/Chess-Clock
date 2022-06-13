import './App.css';
import Header from './components/header/Header';
import Clock from './components/clock/Clock';
import Footer from './components/footer/Footer';
import { useStateContext } from './contexts/ContextProvider';
import React from 'react';

function App() {
  const { turn } = useStateContext();

  return (
    <div className="App">
      <Header />
      <Clock />
      <Footer />
    </div>
  );
}

export default App;
