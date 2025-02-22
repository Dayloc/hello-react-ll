import { useState } from "react";

const useFlux = () => {
  const [store, setStore] = useState({
    user: null,
    isAuthenticated: false,
    dataCharacters: null, // Inicialmente null
    dataPlanets: null, // Inicialmente null
  });

  const actions = {
    login: (userData) => {
      setStore((prevStore) => ({
        ...prevStore,
        user: userData,
        isAuthenticated: true,
      }));
    },
    logout: () => {
      setStore((prevStore) => ({
        ...prevStore,
        user: null,
        isAuthenticated: false,
      }));
    },
    getCharacters: async () => {
      try {
        const response = await fetch(
          "https://dragonball-api.com/api/characters?limit=10",
        );
        if (!response.ok) {
          throw new Error("Error al obtener los datos de personajes");
        }
        const data = await response.json();
        setStore((prevStore) => ({
          ...prevStore,
          dataCharacters: data, // Actualiza el estado con los datos
        }));
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    },
    getPlanets: async () => {
      try {
        const response = await fetch(
          "https://dragonball-api.com/api/planets?limit=10",
        );
        if (!response.ok) {
          throw new Error("Error al obtener los datos de planetas");
        }
        const data = await response.json();
        setStore((prevStore) => ({
          ...prevStore,
          dataPlanets: data, // Actualiza el estado con los datos
        }));
      } catch (error) {
        console.error("Error fetching planets:", error);
      }
    },
  };

  return { store, actions };
};

export default useFlux;
