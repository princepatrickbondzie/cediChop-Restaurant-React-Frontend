import React from "react";
import "./index.css";
import { Carousel, Button } from "antd";

const Slider = () => {
  return (
    <div className="slider-container">
      <Carousel autoplay style={{ width: "100%", height: "100%" }}>
        <div className="caro-slider">
          <div className="slide num1">
            <div className="content-slide">
              <span>our special dish</span>
              <h3>spicy noodles</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                natus dolor cumque?
              </p>
              <a href="#" className="btn">
                order now
              </a>
            </div>
            <div className="image">
              <img src="images/home-img-1.png" alt="" />
            </div>
          </div>
        </div>

        <div className="caro-slider">
          <div className="slide num2">
            <div className="content-slide">
              <span>our special dish</span>
              <h3>fried chicken</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                natus dolor cumque?
              </p>
              <a href="#" className="btn">
                order now
              </a>
            </div>
            <div class="image">
              <img src="images/home-img-2.png" alt="" />
            </div>
          </div>
        </div>

        <div className="caro-slider">
          <div className="slide num3">
            <div className="content-slide">
              <span>our special dish</span>
              <h3>hot pizza</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                natus dolor cumque?
              </p>
              <a href="#" className="btn">
                order now
              </a>
            </div>
            <div className="image">
              <img src="images/home-img-3.png" alt="" />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
