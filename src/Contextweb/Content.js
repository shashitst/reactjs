
import React from 'react';
import { useTheme } from './ThemeProvider';

const Content = () => {
  const { theme } = useTheme();

  return (
    <div style={{ color: theme === 'light' ? '#FFFF00' : '#eee', padding: '1rem' }}>
      <p>This is the content area.</p>
    </div>
  );
};

export default Content;
