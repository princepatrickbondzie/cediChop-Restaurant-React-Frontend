import React from "react";
import "./index.css";
import { Rate } from "antd";

const Dishes = () => {
  return (
    <div>
      <section className="dishes" id="dishes">
        <h3 className="sub-heading">our dishes</h3>
        <h1 className="heading">popular dishes</h1>

        <div className="box-container">
          <div className="box">
            {/* <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a> */}
            <img src="images/dish-1.png" alt="" />
            <h3>tasty sandwitch</h3>
            <Rate
              disabled
              allowHalf
              defaultValue={3.5}
              id="rate"
              style={{ color: "#1890ff" }}
            />
            <br />
            <br />
            <div className="pricing">
              <span>&#8373;15.99</span>
              <a href="#" className="btn" id="btn-order">
                add to cart
              </a>
            </div>
          </div>

          <div className="box">
            {/* <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a> */}
            <img src="images/dish-2.png" alt="" />
            <h3>tasty food</h3>
            <Rate
              disabled
              allowHalf
              defaultValue={3.5}
              id="rate"
              style={{ color: "#1890ff" }}
            />
            <br />
            <br />
            <div className="pricing">
              <span>&#8373;15.99</span>
              <a href="#" className="btn" id="btn-order">
                add to cart
              </a>
            </div>
          </div>

          <div className="box">
            {/* <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a> */}
            <img src="images/dish-3.png" alt="" />
            <h3>Grilled Chicken</h3>
            <Rate
              disabled
              allowHalf
              defaultValue={3.5}
              id="rate"
              style={{ color: "#1890ff" }}
            />
            <br />
            <br />
            <div className="pricing">
              <span>&#8373;70.99</span>
              <a href="#" className="btn" id="btn-order">
                add to cart
              </a>
            </div>
          </div>
          <div className="box">
            {/* <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a> */}
            <img src="images/dish-4.png" alt="" />
            <h3>Hot Pizza</h3>
            <Rate
              disabled
              allowHalf
              defaultValue={3.5}
              id="rate"
              style={{ color: "#1890ff" }}
            />
            <br />
            <br />
            <div className="pricing">
              <span>&#8373;45.99</span>
              <a href="#" className="btn" id="btn-order">
                add to cart
              </a>
            </div>
          </div>
          <div className="box">
            {/* <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a> */}
            <img src="images/dish-5.png" alt="" />
            <h3>chocolate Cake</h3>
            <Rate
              disabled
              allowHalf
              defaultValue={3.5}
              id="rate"
              style={{ color: "#1890ff" }}
            />
            <br />
            <br />
            <div className="pricing">
              <span>&#8373;50.99</span>
              <a href="#" className="btn" id="btn-order">
                add to cart
              </a>
            </div>
          </div>
          <div className="box">
            {/* <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a> */}
            <img src="images/dish-6.png" alt="" />
            <h3>Chilli Chicken</h3>
            <Rate
              disabled
              allowHalf
              defaultValue={3.5}
              id="rate"
              style={{ color: "#1890ff" }}
            />
            <br />
            <br />
            <div className="pricing">
              <span>&#8373;65.99</span>
              <a href="#" className="btn" id="btn-order">
                add to cart
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dishes;
