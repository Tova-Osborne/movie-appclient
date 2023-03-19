import React from "react";
import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("https://tovamovielistapp.herokuapp.com/movies")
      .then((response) => response.json())
      .then((data) => {
        const moviesApi = data.movies.map((movies) => {
          return {
            id: movies.key,
            title: movies.title,
            description: movies.description,
            genre: movies.genre.name,
            director: movies.director.name,
          };
        });

        setMovies(moviesApi);
      });
  }, []);

  if (selectedMovie) {
    return (
      <MovieView
        movieData={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div> The movie list is empty! </div>;
  }

  return (
    <div>
      <React.StrictMode>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movieData={movie}
            onMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie);
            }}
          />
        ))}
      </React.StrictMode>
    </div>
  );
};
