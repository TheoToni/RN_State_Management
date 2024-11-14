import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const toggleFavorite = (movie) => {
    setFavoriteMovies((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.some(
        (favMovie) => favMovie.id === movie.id
      );

      if (isAlreadyFavorite) {
        return prevFavorites.filter((favMovie) => favMovie.id !== movie.id);
      } else {
        return [...prevFavorites, movie];
      }
    });
  };

  const isFavorite = (movieId) => {
    return favoriteMovies.some((movie) => movie.id === movieId);
  };

  return (
    <AppContext.Provider
      value={{
        favoriteMovies,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
