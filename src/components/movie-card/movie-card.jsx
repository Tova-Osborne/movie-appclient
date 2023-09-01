import PropTypes from "prop-types";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

export const MovieCard = ({ movieData }) => {
  const [query, setQuery] = useState("");
  console.log(movieData)
  return (
    // <input type="text" placeholder="Search..." className="search" onChange={e => setQuery(e.target.value)}/>
    {movieData.filter((movie) => 
      movieData.title.toLowerCase().includes(query)).map((movie) => (
    <Card className="h-100 text-center mb-5" border="dark">
      <Card.Img variant="top" src={movieData.image} alt="Movie Poster" />
      <Card.Body>
        <Card.Title>{movieData.title}</Card.Title>
        <Link to={`/movies/${encodeURIComponent(movieData.id)}`}>
          <Button variant="link">Details</Button>
        </Link>
      </Card.Body>
    </Card>
    ))}
  );
};

MovieCard.propTypes = {
  movieData: PropTypes.object.isRequired,
  // movie: PropTypes.shape({
  //   title: PropTypes.object,
  //   description: PropTypes.string,
  //   genre: PropTypes.string,
  //   director: PropTypes.string,
  //   image: PropTypes.string,
  // }).isRequired,
};
