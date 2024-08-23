import React from "react";
import Button from "../layout/Button";
import { Link } from "react-scroll";
import Heading from "../layout/Heading";
const About = () => {
  return (
    <div className="md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
      <div className="w-full md:w-24">
        <img
          src="https://media.istockphoto.com/id/1365562800/photo/fun-at-work-meetings.jpg?s=1024x1024&w=is&k=20&c=q7EtGdA7EfbX-DX3QVJBWoNgB0Rf0HnJ3tg8dbIoEiw="
          alt=""
        />
      </div>
      <div
        className="w-full md:w-2/4 text-center space
      -y-2"
      >
        <Heading title="About" title2="Us?" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          dignissimos dolorem molestiae. Amet quos, velit adipisci inventore
          ipsa non eum!
        </p>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>
    </div>
  );
};

export default About;
