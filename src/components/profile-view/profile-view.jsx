import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import { Button, Card, Row, FloatingLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ChangeView } from "./change-view";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { AccountView } from "./account-view";
import { UpdateView } from "./update-view";
import { ChangeView } from "./change-view";
import { FavoritesView } from "./favorites-view";
import { useSelector } from "react-redux";

export const ProfileView = () => {
  const user = useSelector((state) => state.user);

  // const storedUser = JSON.parse(localStorage.getItem("user"));

  return (
    <Tabs defaultActiveKey="account" id="account-tab" className="mb-3">
      <Tab eventKey="account" title="Account Overview">
        <AccountView user={user} />
      </Tab>
      <Tab eventKey="account-details" title="Manage Account Details">
        <ChangeView user={user} />
      </Tab>
    </Tabs>
  );
};
