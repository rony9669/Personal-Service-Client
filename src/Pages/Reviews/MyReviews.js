import React, { useContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../Hooks/useTitle";
import MyReviewShow from "./MyReviewShow";
import "./ReviewShow.css";

import Swal from "sweetalert2";

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  useTitle("My reviews");
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(
      `https://assignment-11-server-delta.vercel.app/myreviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("recipe-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })

      .then((data) => setReviews(data));
  }, [user?.email, logOut]);

  //handle delete//
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this review?"
    );
    if (proceed) {
      fetch(`https://assignment-11-server-delta.vercel.app/review/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("recipe-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire({
              text: "Deleted successfully !!!",
              icon: "success",
              confirmButtonText: "Done",
            });
            const remaining = reviews.filter((odr) => odr._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  //handle Update

  return (
    <Container>
      <Row className="mt-3  mb-5">
        <div className="">
          {reviews.length === 0 && (
            <h3 className="text-danger mt-5 mb-5 text-center font-weight-bold  ">
              No Reviews were added.
            </h3>
          )}

          {reviews.length > 0 &&
            reviews.map((review) => (
              <MyReviewShow
                key={review._id}
                handleDelete={handleDelete}
                review={review}
              ></MyReviewShow>
            ))}
        </div>
      </Row>
    </Container>
  );
};

export default MyReviews;
