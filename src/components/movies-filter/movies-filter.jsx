import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import { setFilter } from "../../redux/reducers/movies";
import { Row, Col } from "react-bootstrap";

export const MoviesFilter = () => {
  const filter = useSelector((state) => state.movies.filter);
  const dispatch = useDispatch();

  return (
    <Row>
      <Col>
        <Form.Control
          className="mb-3 mt-3"
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={(e) => dispatch(setFilter(e.target.value))}
        />
      </Col>
      <Col></Col>
    </Row>
  );
};
