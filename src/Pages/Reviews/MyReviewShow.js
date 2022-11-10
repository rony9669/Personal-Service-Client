import React from "react";
import { Button } from "react-bootstrap";
import "./ReviewShow.css";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const ReviewShow = ({ review, handleDelete }) => {
  const { customer, message, _id, userPhoto, serviceName } = review;
  //   console.log(review.customer);

  return (
    <>
      <div className=" text-center mt-4">
        <div className="">
          <div className="card testimonial-card">
            <div className="card-up color"></div>
            <div className="avatar mx-auto bg-white">
              <img
                src={userPhoto}
                className="rounded-circle img-fluid"
                alt=""
              />
            </div>
            <div className="card-body">
              <h4 className="mb-4">{customer}</h4>
              <hr />
              <h5 className="mb-2">
                Recipe: <span className="text-danger">{serviceName}</span>
              </h5>
              <hr />
              <p className="dark-grey-text mt-4">{message}</p>
              <div className="d-flex justify-content-between">
                <Link to={`/updateReviews/${_id}`}>
                  <Button variant="info">Edit Review</Button>
                </Link>

                <div>
                  <Button onClick={() => handleDelete(_id)} variant="danger">
                    Delete
                  </Button>
                  <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewShow;
