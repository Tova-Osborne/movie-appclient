import React from "react";
import { useState, useEffect } from "react";
import { LoginView } from "../login-view/login-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (!token) {
      return;
    }
    console.log(token);

    fetch("https://tovamovielistapp.herokuapp.com/movies", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const moviesApi = data.map((movie) => {
          return {
            id: movie._id,
            title: movie.Title,
            description: movie.Description,
            genre: movie.Genre.Name,
            director: movie.Director.Name,
            image: movie.ImagePath,
          };
        });
        setMovies(moviesApi);
      });
  }, [token]);

  if (!user) {
    return (
      <>
        <LoginView
          onLoggedIn={(user, token) => {
            setUser(user);
            setToken(token);
          }}
        />
        <SignupView />
      </>
    );
  }

  if (!user) {
    return (
      <Row className="justify-content-md-center">
        <Col md={5}>
          <LoginView
            onLoggedIn={(user, token) => {
              setUser(user);
              setToken(token);
            }}
          />
          OR
          <SignupView />
        </Col>
      </Row>
    );
  }

  if (selectedMovie) {
    return (
      <Row>
        <Col md={8}>
          <MovieView
            movieData={selectedMovie}
            onBackClick={() => setSelectedMovie(null)}
          />
        </Col>
      </Row>
    );
  }

  if (movies.length === 0) {
    return <div> The movie list is empty! </div>;
  }

  return (
    <Row>
      <React.StrictMode>
        {movies.map((movie) => (
          <Col className="mb-5" key={movie.id} md={3}>
            <MovieCard
              movieData={movie}
              onMovieClick={(newSelectedMovie) => {
                setSelectedMovie(newSelectedMovie);
              }}
            />
          </Col>
        ))}
      </React.StrictMode>
      <Col md={8}>
        <Button
          variant="dark"
          onClick={() => {
            setUser(null);
            setToken(null);
            localStorage.clear();
          }}
        >
          Logout
        </Button>
      </Col>
    </Row>
  );
};
