import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import useTitle from "../../Hooks/useTitle";
import Swal from "sweetalert2";

const AddServices = () => {
  useTitle("Add Services");
  const handlePlaceReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const img = form.image.value;
    const description = form.description.value;
    // console.log(email, name, message);

    const service = {
      name: name,
      price: price,
      img: img,
      description: description,
    };

    fetch("https://assignment-11-server-delta.vercel.app/addServices", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            // title: "Error!",
            text: "Product added successfully !!!",
            icon: "success",
            confirmButtonText: "Done",
          });

          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };
  return (
    <Container>
      <Row className="mt-5 mb-5">
        <Col></Col>
        <Col xs={9}>
          <h4 className="text-center">
            <span className="text-danger">Add Products</span>
          </h4>
          <Form onSubmit={handlePlaceReview}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter Product Name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                name="price"
                type="text"
                placeholder="price"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Image </Form.Label>
              <Form.Control
                name="image"
                type="text"
                placeholder="photo URL"
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                name="description"
                as="textarea"
                rows={5}
                placeholder="Type your product description here..."
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

export default AddServices;
