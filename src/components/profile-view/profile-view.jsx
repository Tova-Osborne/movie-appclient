import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import { Button, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MovieCard } from "../movie-card/movie-card";
import { ChangeView } from "../change-view/change-view";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const ProfileView = (userData) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  return (
    <Row>
      <Col className="h-100 mb-5">
        <h3> Account Details</h3>
        <div> Username: {storedUser.Username}</div>
        <div> Email: {storedUser.Email} </div>
        <div> Birthday: {storedUser.Birthdate} </div>
      </Col>

      <Col className="h-100 mb-5">
        <h3>Manage Account Details</h3>
        <div>
          <ChangeView />
        </div>
      </Col>
    </Row>
  );
};

// export const MovieView = ({ movies }) => {
//     const { movieId } = useParams();

//     let favoriteMovies = movies.filter((m) => user.Favorites.includes(m._id));
// };
// ProfileView.PropTypes = {
//     users: PropTypes.object.isRequired,
// };

// export const ProfileView = () => {

//   useEffect(() => {
//     if (!token) {
//       return;
//     }
