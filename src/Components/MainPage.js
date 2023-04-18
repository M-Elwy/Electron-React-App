import logo from '../logo.svg';
import '../App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PushPinIcon from '@mui/icons-material/PushPin';

function MainPage() {
  const [isPinned, setIsPinned] = React.useState(false);

  const togglePin = () => {
    const newPin = !isPinned;
    setIsPinned(newPin)
    window.electron.togglePin(newPin)
  }

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#000' }}>
          <Toolbar variant="dense" sx={{ backgroundColor: '#000' }}>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, color: isPinned ? '#FBA72C' : '#FFF' }} onClick={togglePin}>
              <PushPinIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          MainPage
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default MainPage;