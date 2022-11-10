import React from "react";
import "./AboutUS.css";
import { AiOutlineSafety } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { IoFastFoodOutline } from "react-icons/io5";

const AboutUs = () => {
  return (
    <div className="feat bg-gray pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="section-head col-sm-12">
            <h4>
              <span>Why Choose </span> My Services?
            </h4>
            <p>
              All our products are made with prime ingredients that are selected
              with best care. Exclusive Foods has a strong commitment to health
              and nutrition, therefore it only distributes foodstuff
              manufactured with very few or none additives. This approach helps
              to preserve traditional recipes and to safeguard customer’s
              health.
            </p>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="item">
              {" "}
              <span className="icon feature_box_col_four">
                <IoFastFoodOutline className="delivery" />
              </span>
              <h6>TOP QUALITY AND TASTE</h6>
              <p>
                Focusing on quality, Exclusive Foods brings only for your
                happiness and hunger pangs.All my products are made with prime
                ingredients.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="item">
              {" "}
              <span className="icon feature_box_col_five">
                <AiOutlineSafety className="delivery" />
              </span>
              <h6>FOOD SAFETY</h6>
              <p>
                Exclusive Foods ambition is to safeguard the health of our
                customer's clientele. All of our partners are certified
                according to British Retail Consortium Global Standards (BRC),
                Hazard Critical Control Points (HACCP) and International Food
                Standards (IFS)"
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="item">
              {" "}
              <span className="icon feature_box_col_six">
                <TbTruckDelivery className="delivery" />
              </span>
              <h6>EASY DELIVERIES</h6>
              <p>
                My logistic team is ready to offer a flexible delivery service
                while respecting the cold chain, in order to ensure the products
                arrive in optimal conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
