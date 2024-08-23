import React from "react";
import { Link } from "react-scroll";
import Button from "../layout/Button";

const Home = () => {
  return (
    <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
      <div className="md:w-2/4 text-center">
        <h2 className="text-5xl font-semibold leading-tight">
          knowledge with{" "}
          <span className="text-5xl font-semibold text-brightGreen">
            Tstudy
          </span>
        </h2>
        <p className="text-lightText mt-5 text-start">
          Learn from the best , we are your gateway to the world of limitless
          learning possiblities. with our cutting-edge elearing platform, you
          can explore a vast library of courses, from academic subjects to
          practical skills, all desighned to help you achieve your goals
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>
      <div className="w-full md:w-2/4">
        <img
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjB3b3JrcGxhY2V8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
