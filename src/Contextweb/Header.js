
import React from 'react';
import { useTheme } from './ThemeProvider';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

    return (
    <header style={{ background: theme === 'light' ? '#FFFF00' : '#eee', padding: '1rem' }}>
      <h1>Theme Switcher</h1>
      <button onClick={toggleTheme}>Press the button</button>
    </header>
  );
};

export default Header;
