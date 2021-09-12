import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import { Button, Tooltip, Badge } from "antd";
import {
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { FaUtensils } from "react-icons/fa";

const Navigation = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <a href="/home" className="menu-logo">
            <i className="logo-icon">
              <FaUtensils size={20} />
            </i>
            CediChop
          </a>
        </div>
        <div className="menu-items">
          <NavLink to="/">
            <Button type="primary" className="menu" id="menu-home">
              Home
            </Button>
          </NavLink>
          <NavLink to="/">
            <Button type="link" className="menu">
              Dishes
            </Button>
          </NavLink>
          <NavLink to="/">
            <Button type="link" className="menu">
              Menu
            </Button>
          </NavLink>
          <NavLink to="/">
            <Button type="link" className="menu">
              Order
            </Button>
          </NavLink>
          <NavLink to="/">
            <Button type="link" className="menu">
              Review
            </Button>
          </NavLink>
          <NavLink to="/">
            <Button type="link" className="menu">
              About
            </Button>
          </NavLink>
        </div>
        <div className="menu-icons">
          <Tooltip title="search">
            <Button
              type="default"
              shape="circle"
              icon={<SearchOutlined />}
              size="large"
              id="menubtn"
            />
          </Tooltip>
          <Button
            type="ghost"
            shape="circle"
            icon={<HeartOutlined />}
            size="large"
            id="menubtn"
          />
          <Badge count={9} style={{ background: "black", fontWeight: "bold" }}>
            <Button
              type="ghost"
              shape="circle"
              icon={<ShoppingCartOutlined />}
              size="large"
              id="menubtn"
            />
          </Badge>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
