import React from "react";
import "./index.css";
import { Avatar, Image } from "antd";

const Review = () => {
  return (
    <div className="review">
      <h3 class="sub-heading">customer's review</h3>
      <h1 class="heading">what they say</h1>
      <div className="reviews">
        <div className="review-box">
          <div className="review-avatar">
            <Avatar
              shape="circle"
              style={{
                marginRight: "10px",
                verticalAlign: "middle",
              }}
              size="large"
              src={<Image src="images/pic-1.png" />}
            />
          </div>
          <div className="rev-txt">
            <h4>Elisha Awuni</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              fugiat consequuntur repellendus aperiam deserunt nihil, corporis
              fugit voluptatibus voluptate totam neque illo placeat eius quis.
            </p>
          </div>
        </div>
        <div className="review-box">
          <div className="review-avatar">
            <Avatar
              shape="circle"
              style={{
                marginRight: "10px",
                verticalAlign: "middle",
              }}
              size="large"
              src={<Image src="images/pic-2.png" />}
            />
          </div>
          <div className="rev-txt">
            <h4>Blessing Takyi</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              fugiat consequuntur repellendus aperiam deserunt nihil, corporis
              fugit voluptatibus voluptate totam neque illo placeat eius quis.
            </p>
          </div>
        </div>
        <div className="review-box">
          <div className="review-avatar">
            <Avatar
              shape="circle"
              style={{
                marginRight: "10px",
                verticalAlign: "middle",
              }}
              size="large"
              src={<Image src="images/pic-3.png" />}
            />
          </div>
          <div className="rev-txt">
            <h4>Prince Nartey</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              fugiat consequuntur repellendus aperiam deserunt nihil, corporis
              fugit voluptatibus voluptate totam neque illo placeat eius quis.
            </p>
          </div>
        </div>
        <div className="review-box">
          <div className="review-avatar">
            <Avatar
              shape="circle"
              style={{
                marginRight: "10px",
                verticalAlign: "middle",
              }}
              size="large"
              src={<Image src="images/pic-4.png" />}
            />
          </div>
          <div className="rev-txt">
            <h4>Blanche</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              fugiat consequuntur repellendus aperiam deserunt nihil, corporis
              fugit voluptatibus voluptate totam neque illo placeat eius quis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
