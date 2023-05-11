import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movieData, onMovieClick }) => {
  return (
    <Card className="h-100 text-center" border="dark">
      <Card.Img variant="top" src={movieData.image} alt="Movie Poster" />
      <Card.Body>
        <Card.Title>{movieData.title}</Card.Title>
        <Link to={`/movies/${encodeURIComponent(movie.Title)}`}>
          <Button
            variant="dark"
            onClick={() => {
              onMovieClick(movieData);
            }}
          >
            Details
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  genre: PropTypes.string,
  director: PropTypes.string,
  image: PropTypes.string.isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
