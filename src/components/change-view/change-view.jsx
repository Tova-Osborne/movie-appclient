import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { setEnvironmentData } from "worker_threads";
import { useParams } from "react-router";

export const ChangeView = ({ onLoggedIn }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  console.log(storedUser.Username);
  const storedToken = localStorage.getItem("token");
  const [newUsername, setUsername] = useState("");
  const [newPassword, setPassword] = useState("");
  const [newEmail, setEmail] = useState("");
  const [newBirthdate, setBirthdate] = useState("");

  //store input data from form in Data object array
  const Data = {
    Username: newUsername,
    Password: newPassword,
    Email: newEmail,
    Birthdate: newBirthdate,
  };

  function updateUser() {
    fetch(
      `https://tovamovielistapp.herokuapp.com/users/${storedUser.Username}`,
      {
        method: "PUT",
        body: JSON.stringify(Data),
        headers: {
          Authorization: `Bearer ${storedToken}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((Data) => {
        console.log("Login response: ", Data);
        if (Data.user) {
          localStorage.setItem("user", JSON.stringify(Data.user));
          localStorage.setItem("token", Data.token);
          onLoggedIn(Data.user, Data.token);
          alert("Change(s) successful!");
        } else {
          alert("No changes made");
        }
      })
      .catch((e) => {
        alert("Something went wrong");
      });
  }

  //     .then((response) => {
  //       if (response.ok) {
  //         alert("Change(s) successful");
  //         window.location.reload();
  //       } else {
  //         alert("Change failed");
  //       }
  //     });
  //   }

  return (
    <Form>
      <Form.Group controlId="formUsernameChange">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          value={newUsername}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter new username"
          minLength="5"
        />
      </Form.Group>
      <Form.Group controlId="formPasswordChange">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="text"
          value={newPassword}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter new password"
          minLength="8"
        />
      </Form.Group>
      <Form.Group controlId="formEmailChange">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          value={newEmail}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter new email address"
        />
      </Form.Group>
      <Form.Group controlId="formBirthdateChange">
        <Form.Label>Birthdate</Form.Label>
        <Form.Control
          type="date"
          value={newBirthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          placeholder="Enter new birthday"
        />
      </Form.Group>
      <Button variant="dark" onClick={updateUser}>
        Update
      </Button>
    </Form>
  );
};
