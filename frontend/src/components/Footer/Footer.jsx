import React from "react";
import "./Footer.css";
import { assetsObj } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assetsObj.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda libero qui autem eligendi tempora voluptate incidunt, fugiat explicabo nisi nihil eos distinctio excepturi deleniti blanditiis optio quod inventore omnis asperiores reprehenderit hic? A recusandae adipisci quaerat ut voluptates voluptate velit cum consequatur blanditiis, dolores, porro corrupti quidem facilis sequi iste aliquid impedit ullam perferendis modi corporis enim! Vitae repellat non voluptate odit dicta pariatur, blanditiis quis alias facilis quaerat tempora impedit magnam consequatur error molestias consequuntur praesentium ex reprehenderit reiciendis assumenda quisquam voluptatem beatae est. Repudiandae iure repellendus distinctio pariatur aliquid eaque voluptates et sed nisi ducimus quos, explicabo minus.
          </p>
          <div className="footer-social-icons">
            <img src={assetsObj.facebook_icon} alt="" />
            <img src={assetsObj.twitter_icon} alt="" />
            <img src={assetsObj.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Policy policy</li>
          </ul>
        </div>
        <div
          className="footer-content-right
        "
        >
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-5414</li>
            <li>contact@gujjsfood.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; GujjusFood.com - All right Reserved
      </p>
    </div>
  );
};

export default Footer;
