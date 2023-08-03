import React from "react";
import { Card } from "react-bootstrap";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MovieCard } from "../movie-card/movie-card";

export const FavoritesView = ({ movies, user }) => {
  console.log(movies);
  console.log(user);
  let favorites = movies.filter((m) => user.Favorites.includes(m.id));
  console.log(favorites);

  return (
    <>
      {favorites.map((movie) => (
        <Col className="mb-5" key={movie._id} md={3}>
          <MovieCard movieData={movie} />
        </Col>
      ))}
    </>
  );
};
