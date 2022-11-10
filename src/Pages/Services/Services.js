import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "../../Router/PrivateRoute/PrivateRoute.css";
import useTitle from "../../Hooks/useTitle";

const Services = () => {
  const [services, setServices] = useState([]);
  useTitle("All Services");

  useEffect(() => {
    fetch("https://assignment-11-server-delta.vercel.app/home/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);
  return (
    <Container>
      <Row className="mb-5">
        <h1 className="mb-4 mt-3 text-center text-danger fs-3">All services</h1>
        <div className="card-grid">
          {services.length === 0 && (
            <Spinner animation="border" className="loading" variant="primary" />
          )}
          {services.map((service) => (
            <Card key={service._id}>
              <PhotoProvider>
                <PhotoView src={service.img}>
                  <Card.Img
                    variant="top"
                    style={{ height: 200 }}
                    src={service.img}
                  />
                </PhotoView>
              </PhotoProvider>

              <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>
                  {service.description.length > 100
                    ? service.description.slice(1, 100) + "..."
                    : service.description}
                  <h3 className="text-warning">Price: {service.price}Taka</h3>
                </Card.Text>
                <Link to={`/serviceDetails/${service._id}`}>
                  <Button variant="primary">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Row>
    </Container>
  );
};

export default Services;
