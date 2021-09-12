import React from "react";
import "./index.css";

const WhyUs = () => {
  return (
    <div className="whyus" id="about">
      <h3 class="sub-heading">about us</h3>
      <h1 class="heading">why choose us?</h1>

      <div className="us">
        <div className="image">
          <img
            src="images/about-img.png"
            alt=""
            style={{ height: "100%", width: "100%" }}
          />
        </div>

        <div class="content">
          <h3>best food in the country</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            sequi corrupti corporis quaerat voluptatem ipsam neque labore modi
            autem, saepe numquam quod reprehenderit rem? Tempora aut soluta odio
            corporis nihil!
          </p>
          {/* <br /> */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
            nemo. Sit porro illo eos cumque deleniti iste alias, eum natus.
          </p>
          <div className="icons-container">
            <div className="icons">
              <i className="fas fa-shipping-fast"></i>
              <span>free delivery</span>
            </div>
            <div className="icons">
              <i className="fas fa-dollar-sign"></i>
              <span>easy payments</span>
            </div>
            <div className="icons">
              <i className="fas fa-headset"></i>
              <span>24/7 service</span>
            </div>
          </div>
          <a href="#" className="btn">
            learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
