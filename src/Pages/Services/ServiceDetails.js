import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../Hooks/useTitle";
import ReviewFood from "../Reviews/ReviewFood";
import ReviewShow from "../Reviews/ReviewShow";
import "../Reviews/ReviewShow.css";
import Swal from "sweetalert2";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const { _id, name, price, description, img } = useLoaderData();
  const [reviews, setReviews] = useState([]);
  useTitle("Service Details");
  // console.log(reviews);

  useEffect(() => {
    //https://assignment-11-server-delta.vercel.app/reviews?service=${serviceDetails._id}
    fetch(
      `https://assignment-11-server-delta.vercel.app/reviews?service=${_id}`
    )
      .then((res) => res.json())

      .then((data) => setReviews(data));
  }, [_id, reviews]);
  //start
  const handlePlaceReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = user?.email || "unregistered";
    const userName = user?.displayName;
    const message = form.message.value;
    // console.log(email, name, message);

    const review = {
      service: _id,
      serviceName: name,
      price,
      customer: userName,
      userPhoto: user?.photoURL,
      email,
      message,
    };

    fetch("https://assignment-11-server-delta.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            // title: "Error!",
            text: "Review added successfully !!!",
            icon: "success",
            confirmButtonText: "Done",
          });

          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };
  //end

  return (
    <Container className="mt-4 mb-5">
      <Row>
        <Col></Col>
        <Col xs={9}>
          <Card key={_id}>
            <Card.Img variant="top" style={{ height: 350 }} src={img} />
            <Card.Body>
              <Card.Title className="text-danger font-weight-bold">
                {name}
              </Card.Title>
              <Card.Text>{description}</Card.Text>
              <h4 className="text-warning font-weight-bold">
                Price: {price}Taka
              </h4>
            </Card.Body>
          </Card>
          <hr />
          <h3 className="mt-4 text-success text-center ">Service Reviews</h3>
          <hr />
          <div className="mb-2">
            {reviews.map((review) => (
              <ReviewShow key={review._id} review={review}></ReviewShow>
            ))}
          </div>
          <div className="d-flex justify-content-center align-items-center ">
            {user?.email ? (
              <ReviewFood handlePlaceReview={handlePlaceReview}></ReviewFood>
            ) : (
              <>
                <span className="text-danger mt-3 me-2 font-weight-bold">
                  Please login to add a review.
                </span>
                <Link to="/login">
                  <Button className="mt-3 " variant="primary">
                    Login
                  </Button>
                </Link>
              </>
            )}
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default ServiceDetails;
