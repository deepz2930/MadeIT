import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      const parsedItem = item ? JSON.parse(item) : null;

      // ✅ Use initialValue if localStorage value is null or empty array
      if (parsedItem === null || (Array.isArray(parsedItem) && parsedItem.length === 0)) {
        localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
      }

      return parsedItem;
    } catch (error) {
      console.error('LocalStorage error:', error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('LocalStorage write error:', error);
    }
  };

  return [storedValue, setValue];
}
