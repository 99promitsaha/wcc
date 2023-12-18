import React from 'react';
import './App.css';
import Header from './components/Header';
import ProgramDetails from './components/ProgramDetails';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Mentors from './components/Mentors';

function App() {
  return (
    <div className="App">
      <Header />
      <ProgramDetails />
      <Mentors />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;