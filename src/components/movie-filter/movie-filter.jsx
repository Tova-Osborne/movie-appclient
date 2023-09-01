import React from "react";
import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { Row, Col, Form, FormControl } from "react-bootstrap";

export const MoviesFilter = ({ movies }) => {
  const [query, setQuery] = useState("");
  console.log(movies);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query)
  );

  console.log(filteredMovies);

  return (
    <>
      <Row>
        <Col>
          <Form.Control
            className="mb-3 mt-3"
            type="text"
            placeholder="Search..."
            value={filteredMovies.title}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        {movies.length === 0 ? (
          <Col> The movie list is empty! </Col>
        ) : (
          filteredMovies.map((movie) => <MovieCard movieData={movie} />)
        )}
      </Row>
    </>
  );
};
