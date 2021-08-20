import React from "react";
import "./Header.css";
import { SiTwitter } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiFacebook } from "react-icons/si";

function Header(props) {
  return (
    <div className="header">
      <div className="heading">
        <div className="head_content">
          <span>
            We are the leaders <br />
            in <strong> Interior Planning</strong>
          </span>
        </div>
      </div>

      <div className="paragraph">
        <div className="para_content">
          <span>
            Creating webpage attractive for a wide variety purpose Full support
            in the selection of finsih materieal ,furniture,and accessories
          </span>
        </div>
      </div>

      <div className="buttons">
        <div className="social_btn">
          <span className="icon">
            <SiTwitter />
          </span>
          <span className="icon">
            <SiInstagram />
          </span>
          <span className="icon">
            <SiFacebook />
          </span>
        </div>
        <div className="simple_btn">
          <button className="btn">Explore More</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
