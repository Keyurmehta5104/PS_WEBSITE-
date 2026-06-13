import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem('pst-theme') === 'dark'; } catch { return false; }
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    try { localStorage.setItem('pst-theme', dark ? 'dark' : 'light'); } catch {}
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, toggle: () => setDark(d => !d) }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

/* Shared color tokens — call t(dark) in any component */
export function t(dark) {
  return {
    bg:           dark ? '#111110' : '#F7F4EC',
    bgCard:       dark ? '#1d1c1a' : '#ffffff',
    bgCardSubtle: dark ? '#161513' : '#fafafa',
    bgInput:      dark ? '#141312' : '#fafafa',
    heading:      dark ? '#f0ede6' : '#0a0a0a',
    ink:          dark ? '#e8e4dc' : '#1a1a1a',
    body:         dark ? '#9a9690' : '#737373',
    bodyMid:      dark ? '#8a8682' : '#525252',
    muted:        dark ? '#666260' : '#a3a3a3',
    border:       dark ? '#2d2b28' : '#ece7da',
    borderLight:  dark ? '#252320' : '#e5e5e5',
    orange:       '#FF8048',
  };
}
