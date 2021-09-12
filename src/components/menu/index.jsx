import React from "react";
import "./index.css";
import { Rate } from "antd";

const OurMenu = () => {
  return (
    <div className="our-menu">
      <h3 class="sub-heading">our menu</h3>
      <h1 class="heading">today's speciality</h1>

      <div className="box-container">
        <div className="menu-box">
          <div className="image">
            <img src="images/menu-1.jpg" alt="" />
            <a href="#" className="fas fa-heart"></a>
          </div>
          <br />
          <div className="menu-content">
            <div className="stars">
              <Rate
                disabled
                allowHalf
                defaultValue={4.5}
                id="rate"
                style={{ color: "#1890ff" }}
              />
            </div>
            <h3>Hot Meat Pizza</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi, accusantium.
            </p>
            <span className="price">&#8373;65.95</span>
            <a href="/" className="btn" id="btn-order">
              add to cart
            </a>
          </div>
        </div>

        <div className="menu-box">
          <div class="image">
            <img src="images/menu-2.jpg" alt="" />
            <a href="#" class="fas fa-heart"></a>
          </div>
          <br />
          <div class="menu-content">
            <div class="stars">
              <Rate
                disabled
                allowHalf
                defaultValue={5}
                id="rate"
                style={{ color: "#1890ff" }}
              />
            </div>
            <h3>Delicious Sandwitch</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi, accusantium.
            </p>
            <span className="price">&#8373;15.99</span>
            <a href="/" className="btn" id="btn-order">
              add to cart
            </a>
          </div>
        </div>

        <div className="menu-box">
          <div class="image">
            <img src="images/menu-3.jpg" alt="" />
            <a href="#" class="fas fa-heart"></a>
          </div>
          <br />
          <div class="menu-content">
            <div class="stars">
              <Rate
                disabled
                allowHalf
                defaultValue={3.5}
                id="rate"
                style={{ color: "#1890ff" }}
              />
            </div>
            <h3>Delicious food</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi, accusantium.
            </p>
            <span className="price">&#8373;15.99</span>
            <a href="/" className="btn" id="btn-order">
              add to cart
            </a>
          </div>
        </div>

        <div className="menu-box">
          <div class="image">
            <img src="images/menu-4.jpg" alt="" />
            <a href="#" class="fas fa-heart"></a>
          </div>
          <br />
          <div class="menu-content">
            <div class="stars">
              <Rate
                disabled
                allowHalf
                defaultValue={3.5}
                id="rate"
                style={{ color: "#1890ff" }}
              />
            </div>
            <h3>Chocolate Cookie</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi, accusantium.
            </p>
            <span className="price">&#8373;15.00</span>
            <a href="/" className="btn" id="btn-order">
              add to cart
            </a>
          </div>
        </div>

        <div className="menu-box">
          <div class="image">
            <img src="images/menu-5.jpg" alt="" />
            <a href="#" class="fas fa-heart"></a>
          </div>
          <br />
          <div class="menu-content">
            <div class="stars">
              <Rate
                disabled
                allowHalf
                defaultValue={3.5}
                id="rate"
                style={{ color: "#1890ff" }}
              />
            </div>
            <h3>Chocolate Cookie</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi, accusantium.
            </p>
            <span className="price">&#8373;15.00</span>
            <a href="/" className="btn" id="btn-order">
              add to cart
            </a>
          </div>
        </div>

        <div className="menu-box">
          <div class="image">
            <img src="images/menu-6.jpg" alt="" />
            <a href="#" class="fas fa-heart"></a>
          </div>
          <br />
          <div class="menu-content">
            <div class="stars">
              <Rate
                disabled
                allowHalf
                defaultValue={3.5}
                id="rate"
                style={{ color: "#1890ff" }}
              />
            </div>
            <h3>Cake</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi, accusantium.
            </p>
            <span className="price">&#8373;5.90</span>
            <a href="/" className="btn" id="btn-order">
              add to cart
            </a>
          </div>
        </div>

        <div className="menu-box">
          <div class="image">
            <img src="images/menu-7.jpg" alt="" />
            <a href="#" class="fas fa-heart"></a>
          </div>
          <br />
          <div class="menu-content">
            <div class="stars">
              <Rate
                disabled
                allowHalf
                defaultValue={3.5}
                id="rate"
                style={{ color: "#1890ff" }}
              />
            </div>
            <h3>Natural Beverage</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi, accusantium.
            </p>
            <span className="price">&#8373;5.00</span>
            <a href="/" className="btn" id="btn-order">
              add to cart
            </a>
          </div>
        </div>

        <div className="menu-box">
          <div class="image">
            <img src="images/menu-8.jpg" alt="" />
            <a href="#" class="fas fa-heart"></a>
          </div>
          <br />
          <div class="menu-content">
            <div class="stars">
              <Rate
                disabled
                allowHalf
                defaultValue={3.5}
                id="rate"
                style={{ color: "#1890ff" }}
              />
            </div>
            <h3>Natural Beverage</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi, accusantium.
            </p>
            <span className="price">&#8373;5.00</span>
            <a href="/" className="btn" id="btn-order">
              add to cart
            </a>
          </div>
        </div>

        <div className="menu-box">
          <div class="image">
            <img src="images/menu-9.jpg" alt="" />
            <a href="#" class="fas fa-heart"></a>
          </div>
          <br />
          <div class="menu-content">
            <div class="stars">
              <Rate
                disabled
                allowHalf
                defaultValue={3.5}
                id="rate"
                style={{ color: "#1890ff" }}
              />
            </div>
            <h3>Natural Beverage</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi, accusantium.
            </p>
            <span className="price">&#8373;5.00</span>
            <a href="/" className="btn" id="btn-order">
              add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
