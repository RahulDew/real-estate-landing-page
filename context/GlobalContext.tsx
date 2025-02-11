"use client";

import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext({
  isPopUpOpen: false,
  openPopup: () => {},
  closePopup: () => {},
  handleToggleMobileMenu: () => {},
  isMobileMenuOpen: false,
});

import { ReactNode } from "react";

export function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  //   // Automatically open the popup 5 seconds after the app loads
  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setIsPopUpOpen(true);
  //     }, 5000);
  //     return () => clearTimeout(timer);
  //   }, []);

  const openPopup = () => setIsPopUpOpen(true);
  const closePopup = () => setIsPopUpOpen(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <GlobalContext.Provider
      value={{
        isPopUpOpen,
        openPopup,
        closePopup,
        handleToggleMobileMenu,
        isMobileMenuOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
