import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./Home.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Footer from "../Shared/Footer/Footer";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { PhotoProvider, PhotoView } from "react-photo-view";
import useTitle from "../../Hooks/useTitle";
import CarouselHome from "./CarouselHome";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs/ContactUs";

const Home = () => {
  // const services = useLoaderData();
  const [services, setServices] = useState([]);
  useTitle("Home");
  useEffect(() => {
    fetch("https://assignment-11-server-delta.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <Container className="mt-2">
      <Row>
        <CarouselHome></CarouselHome>

        <h2 className="text-danger text-center  mt-5 mb-3">My Services</h2>
        <div className="card-grid">
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
                  <Button variant="outline-info">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className="d-flex justify-content-center align-items-center ">
          <Link className="mt-5 mb-5 mx-auto my-auto" to="/home/services">
            <Button variant="danger">See All Services</Button>
          </Link>
        </div>

        <div className="mt-0">
          <AboutUs></AboutUs>
        </div>

        <div>
          <ContactUs></ContactUs>
        </div>

        <Footer></Footer>
      </Row>
    </Container>
  );
};

export default Home;
