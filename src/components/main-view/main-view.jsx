import React from "react";
import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Godfather Part II",
      description:
        "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
      genre: {
        name: "Drama",
        description:
          "he drama genre is defined by conflict and often looks to reality rather than sensationalism. Emotions and intense situations are the focus, but where other genres might use unique or exciting moments to create a feeling, movies in the drama genre focus on common occurrences.",
      },
      director: {
        name: "Francis Ford Coppola",
        Bio: "Francis Ford Coppola, (born April 7, 1939, Detroit, Michigan, U.S.), American motion-picture director, writer, and producer whose films range from sweeping epics to small-scale character studies. As the director of films such as The Godfather (1972), The Conversation (1974), and Apocalypse Now (1979), he enjoyed his greatest success and influence in the 1970s, when he attempted to create an alternative to the Hollywood system of film production and distribution.",
        Birth: "1939",
      },
      Featured: false,
    },
    {
      id: 2,
      title: "The Green Mile",
      description:
        "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
      genre: {
        name: "Fantasy",
        description:
          "The fantasy genre is defined by both circumstance and setting inside a fictional universe with an unrealistic set of natural laws. The possibilities of fantasy are nearly endless, but the movies will often be inspired by or incorporate human myths.",
      },
      director: {
        name: "Frank Darabont",
        Bio: "Frank Darabont is an American film director, screenwriter and producer. He has been nominated for three Academy Awards and a Golden Globe.",
        Birth: "1959",
      },
      Featured: false,
    },
    {
      id: 3,
      title: "The Godfather",
      description:
        "The GodFather is a movie about The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
      genre: {
        name: "Drama",
        description:
          "he drama genre is defined by conflict and often looks to reality rather than sensationalism. Emotions and intense situations are the focus, but where other genres might use unique or exciting moments to create a feeling, movies in the drama genre focus on common occurrences.",
      },
      director: {
        name: "Francis Ford Coppola",
        Bio: "Francis Ford Coppola, (born April 7, 1939, Detroit, Michigan, U.S.), American motion-picture director, writer, and producer whose films range from sweeping epics to small-scale character studies. As the director of films such as The Godfather (1972), The Conversation (1974), and Apocalypse Now (1979), he enjoyed his greatest success and influence in the 1970s, when he attempted to create an alternative to the Hollywood system of film production and distribution.",
        Birth: "1939",
      },
      Featured: false,
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

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
