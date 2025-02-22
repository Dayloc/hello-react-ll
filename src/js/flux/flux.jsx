import { useState, useEffect } from "react";

const useFlux = () => {
  const [store, setStore] = useState({
    // Define aquí el estado inicial de tu aplicación
    user: null,
    isAuthenticated: false,
  });

  const actions = {
    // Define las acciones que modifican el estado
    login: (userData) => {
      setStore({
        ...store,
        user: userData,
        isAuthenticated: true,
      });
    },
    logout: () => {
      setStore({
        ...store,
        user: null,
        isAuthenticated: false,
      });
    },
  };

  return { store, actions };
};

export default useFlux;