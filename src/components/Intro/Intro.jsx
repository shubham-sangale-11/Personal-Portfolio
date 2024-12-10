import React, { useContext } from "react";
import "./Intro.css";
import me from "../../img/me.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import { themeContext } from "../../Context";
import Resume from "./Debobrota_haldar_resume.pdf";
import { Typewriter } from "react-simple-typewriter";
import SmoothList from "react-smooth-list";
import { HiDownload } from "react-icons/hi";

const Intro = () => {
  // Transition
  // const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <SmoothList transitionDuration={2500} animated={true}>
      <div className="Intro" id="intro">
        <div className="i-left">
          <div className="i-name ">
            <span style={{ color: darkMode ? "white" : "" }}>
              <div style={{ fontSize: "27px" }}>
                <h3 style={{ fontSize: "27px" }} className="helo anim">
                  Hello, my name is
                </h3>
              </div>
            </span>

            <span className="animate-charcte name anim">Shubham Sangale</span>
            <h2 className="full_stack_h2 anim">
              I'm a
              <span className="full_stack anim">
                <Typewriter
                  words={[" Full Stack Web Developer.", " Web Developer."]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
          </div>
          <button
            // onClick={() =>
            //   window.open(
            //     "https://drive.google.com/file/d/1Qer-lZNmSkChsNX6hAn94ylyP_PSJHbs/view?usp=sharing"
            //   )
            // }
            className="resum rounded-sm flex bg-red-500 p-1 pl-3 pr-3  text-white hover:text-red-500 hover:bg-white animate-bounce hover:border-x-2 hover:border-red-500"
          >
            <a
              href="/"
              // download={"Debobrota_haldar_resume"}
              // rel="noreferrer"
              // target="_blank"
              className="pr-0"
            >
              Resume
            </a>
            <HiDownload />
          </button>

          <div className="i-icons">
            <a
              href="https://github.com/shubham-sangale-11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Github} alt="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/shubham-sangale-81568722a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedIn} alt="linkdin" />
            </a>
          </div>
        </div>
{/* ok */}
        <div className="i-right">
          <img src={me} alt="me" draggable="false" className="my_img anim" />
        </div>
      </div>
    </SmoothList>
  );
};

export default Intro;
