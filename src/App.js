import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BGSquares from './components/BGSquares';
import HomeHead from './components/HomeHead';
import WordCloud from './components/WordCloud';


function App() {
  return (
    <div className="App">
      <BGSquares />
      <Navbar/>
      <HomeHead />
      <WordCloud />
    </div>
  );
}

export default App;
