import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))} className="px-3 py-1 border rounded text-sm">
      {theme === 'dark' ? '☀ Light' : '🌙 Dark'}
    </button>
  );
};

export default ThemeToggle;