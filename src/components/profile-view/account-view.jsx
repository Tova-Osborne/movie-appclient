import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";

export const AccountView = () => {
  const user = useSelector((state) => state.user);
  // const storedUser = JSON.parse(localStorage.getItem("user"));
  //   console.log(storedUser.Username);
  const storedToken = localStorage.getItem("token");

  return (
    <Card className="h-100 mb-5" border="dark">
      <Card.Body>
        <Card.Title>Account Details</Card.Title>
        <ListGroup variant="flush">
          <ListGroupItem>Username: {user.Username}</ListGroupItem>
          <ListGroupItem>Email: {user.Email}</ListGroupItem>
          <ListGroupItem>Birthday: {user.Birthdate}</ListGroupItem>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

//   return (
//     <Row>
//       <Col className="h-100 mb-5">
//         <h3> Account Details</h3>
//         <div> Username: {storedUser.Username}</div>
//         <div> Email:  </div>
//         <div> Birthday:  </div>
//       </Col>
//     </Row>
//   );
// };
