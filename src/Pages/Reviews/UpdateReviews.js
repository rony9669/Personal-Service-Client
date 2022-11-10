import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";

const UpdateReviews = () => {
  const updateReview = useLoaderData();
  const [review, setReview] = useState(updateReview);
  // console.log(updateReview);

  //update handler
  const handleUpdateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    fetch(
      `https://assignment-11-server-delta.vercel.app/reviews/${updateReview._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("recipe-token")}`,
        },
        body: JSON.stringify(review),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            // title: "Error!",
            text: "Your review update successfully !",
            icon: "success",
            confirmButtonText: "Done",
          });

          form.reset();
        }
      });
  };

  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newReview = { ...review };
    newReview[field] = value;
    setReview(newReview);
  };
  return (
    <div>
      <Container>
        <Row className="mt-3">
          <Col></Col>
          <Col xs={9}>
            <h3 className="text-center">
              Service Name:
              <span className="text-warning"> {updateReview.serviceName}</span>
            </h3>
            <Form onSubmit={handleUpdateUser}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={handleInputChange}
                  type="email"
                  name="email"
                  defaultValue={updateReview.email}
                  readOnly
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  onChange={handleInputChange}
                  as="textarea"
                  name="message"
                  rows={3}
                  placeholder="Type your review here..."
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Update Review
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default UpdateReviews;
