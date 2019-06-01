import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BGSquares from './components/BGSquares';
import HomeHead from './components/HomeHead';
import WordCloud from './components/WordCloud';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import cyan from '@material-ui/core/colors/cyan';


function App() {
  return (
    <MuiThemeProvider theme={createMuiTheme({
      palette: {
        primary: {
          main: '#FFFFFF'
        },
      }
    })}>
      <div className="App">
        <BGSquares />
        <Navbar/>
        <HomeHead />
        <WordCloud />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
