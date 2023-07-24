import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>animeshkumar6515@gmail.com</span>
        <div className="f-icons">
          
          {/* <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} /> */}
          <a href="https://github.com/Animesh-Kumar-6515"><Gitub color="white" size={"3rem"} /></a>
        </div>
        {/* <span>made with 🖤 by tron</span> */}
        {/* <h4>made with 🖤 by tron</h4> */}
      </div>
    </div>
  );
};

export default Footer;
