import React from "react";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter-alt-square.svg";
import instagram from "../assets/instagram.svg";
import github from "../assets/github.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 h-72 w-full flex flex-col">
      <div className="flex flex-col justify-around h-4/5">
        <h1 className="mt-10 font-dm font-semibold text-white text-3xl">
          Vaibhav Samdani
        </h1>
        <div className="h-2/6 flex justify-center items-center">
          <ul className="flex justify-around items-center w-3/5 md:w-1/5">
            <li>
              <a href="https://linkedin.com/in/vaibhav-samdani" target="_blank" rel="noopener noreferrer">

              <img className="aspect-square object-cover" width={30}  height={30} src={linkedin} alt="Linkedin" />
              </a>
            </li>
            <li>
            <a href="https://github.com/Vaibhav-Samdani" target="_blank" rel="noopener noreferrer">
              <img className="aspect-square object-cover" width={30}  height={30} src={github} alt="" />
              </a>
            </li>
            <li>
            <a href="https://x.com/samdanivaibhav_" target="_blank" rel="noopener noreferrer">
              <img className="aspect-square object-cover" width={30} height={30}  src={twitter} alt="" />
              </a>
            </li>
            <li>
            <a href="https://www.instagram.com/vaibhav_samdani/" target="_blank" rel="noopener noreferrer">
              <img className="aspect-square object-cover" width={30} height={30}  src={instagram} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-950 h-2/6 text-white font-poppins flex flex-col items-center justify-center text-sm p-4 md:text-base"><span>Copyright ©2024 Vaibhav Samdani.</span> <span> Made With ❤ in India</span></div>
    </footer>
  );
};

export default Footer;
