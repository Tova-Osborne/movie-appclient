import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { LoginView } from "../login-view/login-view";

export const SignupView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthdate: birthdate,
    };

    fetch("https://tovamovielistapp.herokuapp.com/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        alert("Sign-up successful");
        window.location.replace("/login");
      } else {
        alert("Sign-up failed");
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength="5"
          placeholder="Enter Username (must be at least 5 characters)"
        />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength="8"
          required
          placeholder="Enter Password (must be at least 8 characters)"
        />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formBirthdate">
        <Form.Label>Birthday</Form.Label>
        <Form.Control
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </Form.Group>
      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
  );
};
