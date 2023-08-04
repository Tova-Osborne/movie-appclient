import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  return (
    <Card className="h-100 text-center mb-5" border="dark">
      <Card.Img variant="top" src={movie.image} alt="Movie Poster" />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
          <Button variant="dark">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  // movie: PropTypes.shape({
  //   title: PropTypes.object,
  //   description: PropTypes.string,
  //   genre: PropTypes.string,
  //   director: PropTypes.string,
  //   image: PropTypes.string,
  // }).isRequired,
};
