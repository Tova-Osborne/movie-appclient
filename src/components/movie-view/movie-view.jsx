import Accordion from "react-bootstrap/esm/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  Container,
  Button,
  Card,
  ListGroup,
  ListGroupItem,
  Image,
} from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const MovieView = ({ movies, user }) => {
  const { movieId } = useParams();
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  console.log(movies);
  const movie = movies.find((m) => m.id === movieId);

  const Data = {
    Favorites: [movieId],
  };
  console.log(Data);

  function addToFavorites() {
    fetch(
      `https://tovamovielistapp.herokuapp.com/users/${
        user._id
      }/movies/${encodeURIComponent(movieId)}`,
      {
        method: "PUT",
        body: JSON.stringify(Data),
        headers: {
          Authorization: `Bearer ${storedToken}`,
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      if (response.ok) {
        alert("Movie Added!");
        window.location.reload();
      } else {
        alert("Failed to add Movie");
      }
    });
  }

  function handleDelete() {
    if (
      window.confirm(
        "Are you sure you want to delete this movie from your Favorites?"
      )
    ) {
      fetch(
        `https://tovamovielistapp.herokuapp.com/users/${
          user._id
        }/movies/${encodeURIComponent(movieId)}`,
        {
          method: "DELETE",
          body: JSON.stringify(Data),
          headers: {
            Authorization: `Bearer ${storedToken}`,
            "Content-Type": "application/json",
          },
        }
      ).then((response) => {
        if (response.ok) {
          alert("Movie Deleted");
          window.location.reload();
        } else {
          alert("Delete failed");
        }
      });
    }
  }

  return (
    <Container>
      <Row className="text-left mt-3">
        <Col>
          <Link to={`/`}>
            <Button variant="dark">Back</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Image
            src={movie.image}
            alt="Movie Poster"
            width={400}
            height={600}
            rounded
          />
        </Col>
      </Row>
      <Row>
        <Col className="display-2 h-100 text-center mt-5">
          <h1>{movie.title}</h1>
          <hr></hr>
        </Col>
      </Row>
      <Row>
        <Col className="display-5h-100 text-center">
          <h3>{movie.director}</h3>
        </Col>
      </Row>
      <Row>
        <Col className="display-6 text-center">
          <h4>{movie.genre}</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            <span className="h6">Description: </span>
            {movie.description}
          </p>
        </Col>
      </Row>
      <Row className="mb-3 text-center">
        <Col>
          <Button variant="primary" onClick={addToFavorites}>
            Add to Favorites
          </Button>
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          <Button className="mb-12" variant="danger" onClick={handleDelete}>
            Remove from Favorites
          </Button>
        </Col>
      </Row>
    </Container>
  );

  // <Card className="h-100 mb-5" border="dark">
  //   <Card.Body>
  //     <Card.Title>{movie.title}</Card.Title>
  //     <Card.Subtitle className="mb-2 text-muted">
  //       {movie.director}
  //     </Card.Subtitle>
  //     <Card.Subtitle className="mb-2 text-muted">{movie.genre}</Card.Subtitle>
  //     <Card.Text>Description: {movie.description}</Card.Text>
  //
  //   </Card.Body>
  //   <Card.Img variant="top" src={movie.image} alt="Movie Poster" />
  // </Card>
};
