import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const theme = {
    isDarkTheme,
    colors: {
      background: isDarkTheme ? '#000' : '#fff',
      text: isDarkTheme ? '#fff' : '#000',
      subtext: isDarkTheme ? '#aaa' : '#888',
      card: isDarkTheme ? '#1a1a1a' : '#f4f4f4',
      iconBackground: isDarkTheme ? '#1E1E2D' : '#f4f4f4',
      activeTintColor: '#257CFF',
      inactiveTintColor: isDarkTheme ? '#888' : 'grey',
      negativeTransaction: isDarkTheme ? '#fff' : '#000',
      positiveTransaction: '#257CFF',
    },
    toggleTheme,
  };

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
