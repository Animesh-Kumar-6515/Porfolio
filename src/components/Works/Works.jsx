import React, { useContext } from "react";
import "./Works.css";
import cppp from "../../img/cppp.png";
import jss from "../../img/jss.png";
import csss from "../../img/csss.png";
import HTMLL from "../../img/HTMLL.png";
import reactt from "../../img/reactt.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Can work with
          </span>
          <span>Languages & frameworks</span>
          <spane >
          with expertise in React, Node.js, CSS, JavaScript, and C++. 
            <br />
            Excelling in crafting user-friendly interfaces, implementing dynamic functionalities
            <br />
            building scalable server-side applications, and tackling complex algorithmic challenges.
            <br />
            My passion for clean code and continuous learning makes them a valuable asset
            <br />
            in any development team, poised to drive innovation and success in software projects.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={cppp} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={HTMLL} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={jss} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={csss} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={reactt} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
