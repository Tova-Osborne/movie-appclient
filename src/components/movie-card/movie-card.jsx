import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movieData }) => {
  return (
    <Card className="h-100 text-center" border="dark">
      <Card.Img variant="top" src={movieData.image} alt="Movie Poster" />
      <Card.Body>
        <Card.Title>{movieData.title}</Card.Title>
        <Link to={`/movies/${encodeURIComponent(movieData.id)}`}>
          <Button variant="link">Details</Button>
        </Link>
      </Card.Body>
    </Card>
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
