import React from "react";
import "./ReviewShow.css";

const ReviewShow = ({ review }) => {
  const { customer, message, userPhoto } = review;
  //   console.log(review.customer);
  return (
    <>
      <div className=" text-center mt-4 ">
        <div className="">
          <div className="card testimonial-card">
            <div className="card-up color"></div>
            <div className="avatar mx-auto bg-white">
              <img src={userPhoto} className="rounded img-fluid" alt="" />
            </div>
            <div className="card-body">
              <h4 className="">{customer}</h4>
              <hr />
              <p className="dark-grey-text ">{message}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewShow;
