import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Button, Modal, Form, Col } from "react-bootstrap";

function AddMovie({ addMovie }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [rate, setRate] = useState("");
  const [trailer,setTrailer] = useState("");
  const [id,setId] = useState(uuidv4);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(title, description, posterUrl, rate,trailer,id);
    setId();
    setShow(false);
    setTitle("");
    setDescription("");
    setPosterUrl("");
    setRate("");
  };

  return (
    <>
      <Button variant="outline-light" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group style={{ display: "flex" }}>
            <Form.Label column sm="3">
              {" "}
              Title{" "}
            </Form.Label>
            <Col sm="8">
              {" "}
              <Form.Control
                type="text"
                placeholder="..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />{" "}
            </Col>
          </Form.Group>

          <Form.Group style={{ display: "flex" }}>
            <Form.Label column sm="3">
              {" "}
              Description{" "}
            </Form.Label>
            <Col sm="8">
              {" "}
              <Form.Control
                type="text"
                placeholder="..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />{" "}
            </Col>
          </Form.Group>

          <Form.Group style={{ display: "flex" }}>
            <Form.Label column sm="3">
              {" "}
              Poster link{" "}
            </Form.Label>
            <Col sm="8">
              {" "}
              <Form.Control
                type="text"
                placeholder="..."
                value={posterUrl}
                onChange={(e) => setPosterUrl(e.target.value)}
              />{" "}
            </Col>
          </Form.Group>

          <Form.Group style={{ display: "flex" }}>
            <Form.Label column sm="3">
              {" "}
              Trailer Link{" "}
            </Form.Label>
            <Col sm="8">
              {" "}
              <Form.Control
                type="text"
                placeholder="..."
                value={trailer}
                onChange={(e) => setTrailer(e.target.value)}
              />{" "}
            </Col>
          </Form.Group>

          <Form.Group style={{ display: "flex" }}>
            <Form.Label column sm="3">
              {" "}
              Rating
            </Form.Label>
            <Col sm="8">
              {" "}
              <Form.Control
                type="text"
                placeholder="..."
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />{" "}
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;
