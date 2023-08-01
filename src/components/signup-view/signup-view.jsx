import React from "react";
import { useState } from "react";
import { FloatingLabel } from "react-bootstrap";
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
        <FloatingLabel
          controlId="floatingUsername"
          label="Username"
          className="mb-3"
        >
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            minLength="5"
            placeholder="Username (must be at least 5 characters)"
          />
        </FloatingLabel>
      </Form.Group>
      <Form.Group controlId="formPassword">
        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="mb-3"
        >
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength="8"
            required
            placeholder="Password (must be at least 8 characters)"
          />
        </FloatingLabel>
      </Form.Group>
      <Form.Group controlId="formEmail">
        <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
        </FloatingLabel>
      </Form.Group>
      <Form.Group controlId="formBirthdate">
        <FloatingLabel
          controlId="floatingBirthday"
          label="Birthday"
          className="mb-3"
        >
          <Form.Control
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            placeholder="Birthday"
          />
        </FloatingLabel>
      </Form.Group>
      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
  );
};
