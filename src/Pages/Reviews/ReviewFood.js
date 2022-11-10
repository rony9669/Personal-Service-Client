import React, { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const ReviewFood = ({ handlePlaceReview }) => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  // const { _id, name, price } = useLoaderData();
  // useTitle("Review");

  return (
    <Container>
      <Row className="mt-5">
        <Col></Col>
        <Col xs={9}>
          <Form onSubmit={handlePlaceReview}>
            <h4 className="text-center">
              <strong>
                <span className="text-danger">
                  {" "}
                  Give your review about this product
                </span>
              </strong>
            </h4>

            <Form.Group
              className="mb-2"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                name="message"
                as="textarea"
                rows={3}
                placeholder="Type your review here..."
                required
              />
            </Form.Group>
            <Button type="submit" className="mb-2">
              Submit
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default ReviewFood;
