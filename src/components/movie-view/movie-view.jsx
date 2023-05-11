import Accordion from "react-bootstrap/esm/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const MovieView = ({ movies }) => {
  const { movieID } = useParams();

  const movie = movie.find((m) => m.id === bookID);

  return (
    <Row>
      <Col className="h-100 mb-5">
        <img
          className="Fluid"
          src={movieData.image}
          alt="Movie Poster"
          height="400px"
        ></img>
        <h1>{movieData.title}</h1>
        <div className="border"> Director: {movieData.director}</div>
        <div className="border"> Genre: {movieData.genre} </div>
        <Accordion className="border" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header> Description </Accordion.Header>
            <Accordion.Body>{movieData.description}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Link></Link>
        <Button variant="dark" onClick={onBackClick}>
          Home
        </Button>
      </Col>
    </Row>
  );
};
