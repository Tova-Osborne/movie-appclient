import Accordion from "react-bootstrap/esm/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((m) => m.id === movieId);

  return (
    <Row>
      <Col className="h-100 mb-5">
        <img
          className="Fluid"
          src={movie.image}
          alt="Movie Poster"
          height="400px"
        ></img>
        <h1>{movie.title}</h1>
        <div className="border"> Director: {movie.director}</div>
        <div className="border"> Genre: {movie.genre} </div>
        <Accordion className="border" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header> Description </Accordion.Header>
            <Accordion.Body>{movie.description}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Link to={`/favorites`}>
          <Button className="btn btn-success">Favorite</Button>
        </Link>
        <Link to={`/`}>
          <Button className="btn-dark" variant="dark">
            Back
          </Button>
        </Link>
      </Col>
    </Row>
  );
};
