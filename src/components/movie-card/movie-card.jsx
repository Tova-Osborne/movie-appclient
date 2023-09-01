import PropTypes from "prop-types";
import { Button, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movieData }) => {
  return (
    <Card
      style={{ width: "22rem" }}
      className="text-center my-2 mx-2"
      border="secondary"
    >
      <Card.Img
        className="m-auto"
        variant="top"
        src={movieData.image}
        alt="Movie Poster"
      />
      <Card.Body>
        <Card.Title>{movieData.title}</Card.Title>
        <Link to={`/movies/${encodeURIComponent(movieData.id)}`}>
          <Button variant="dark">Details</Button>
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
