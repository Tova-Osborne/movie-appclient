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
import { useSelector } from "react-redux";

export const MovieView = () => {
  const movies = useSelector((state) => state.movies);
  const user = useSelector((state) => state.user);
  const { movieId } = useParams();
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  console.log(movies);
  console.log(user);
  const movie = movies.list.find((m) => m.id === movieId);

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
      <Row className="justify-content-evenly">
        <Col>
          <Button variant="primary" size="lg" onClick={addToFavorites}>
            Add to Favorites
          </Button>
        </Col>
        <Col>
          <Button variant="warning" size="lg" onClick={handleDelete}>
            Remove from Favorites
          </Button>
        </Col>
        <Col>
          <Link to={`/`}>
            <Button size="lg" variant="dark">
              Back
            </Button>
          </Link>
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
