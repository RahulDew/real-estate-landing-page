'use client';

// contexts/PopupContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const PopupContext = createContext({
  isOpen: false,
  openPopup: () => {},
  closePopup: () => {}
});

import { ReactNode } from 'react';

export function PopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  // Automatically open the popup 5 seconds after the app loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <PopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
}

export function usePopup() {
  return useContext(PopupContext);
}
