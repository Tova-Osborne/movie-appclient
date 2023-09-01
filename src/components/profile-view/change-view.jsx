import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import { Button, Card, FloatingLabel, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

export const ChangeView = ({ user, onLoggedOut }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  console.log(storedUser);
  const storedToken = localStorage.getItem("token");
  const [newUsername, setUsername] = useState(storedUser.Username);
  const [newPassword, setPassword] = useState(storedUser.Password);
  const [newEmail, setEmail] = useState(storedUser.Email);
  const [newBirthdate, setBirthdate] = useState(storedUser.Birthdate);

  const Data = {
    _id: storedUser._id,
    Username: newUsername,
    Password: newPassword,
    Email: newEmail,
    Birthdate: newBirthdate,
  };
  console.log(Data);

  function handleUpdate() {
    fetch(`https://tovamovielistapp.herokuapp.com/users/${storedUser._id}`, {
      method: "PUT",
      body: JSON.stringify(Data),
      headers: {
        Authorization: `Bearer ${storedToken}`,
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        alert("Change(s) successful");
        localStorage.setItem("user", JSON.stringify(Data));
        window.location.reload(true);
      } else {
        alert("Change failed");
      }
    });
  }

  function handleDelete() {
    if (window.confirm("Are you sure you want to delete your account?")) {
      fetch(`https://tovamovielistapp.herokuapp.com/users/${storedUser._id}`, {
        method: "DELETE",
        body: JSON.stringify(Data),
        headers: {
          Authorization: `Bearer ${storedToken}`,
          "Content-Type": "application/json",
        },
      }).then((response) => {
        if (response.ok) {
          alert("User Deleted");
          window.location.reload(true);
        } else {
          alert("Delete failed");
        }
      });
    }
  }

  return (
    <>
      <Form>
        <h3> Manage Account Details </h3>
        <Form.Group controlId="formUsernameChange">
          <FloatingLabel
            controlId="floatingUsername"
            label="Update Username"
            className="mb-3"
          >
            <Form.Control
              type="text"
              value={newUsername}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Update username"
              minLength="5"
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group controlId="formPasswordChange">
          <FloatingLabel
            controlId="floatingPassword"
            label="Update Password"
            className="mb-3"
          >
            <Form.Control
              type="password"
              value={newPassword}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Update Password"
              minLength="8"
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group controlId="formEmailChange">
          <FloatingLabel
            controlId="floatingEmail"
            label="Update Email"
            className="mb-3"
          >
            <Form.Control
              type="text"
              value={newEmail}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Update email address"
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group controlId="formBirthdateChange">
          <FloatingLabel
            controlId="floatingBirthday"
            label="Update Birthday"
            className="mb-3"
          >
            <Form.Control
              type="date"
              value={newBirthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              placeholder="Enter new birthday"
            />
          </FloatingLabel>
        </Form.Group>
        <Row>
          <Col>
            <Button size="sm" variant="primary" onClick={handleUpdate}>
              Update Account
            </Button>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <Button size="sm" variant="danger" onClick={handleDelete}>
              Delete Account
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};
