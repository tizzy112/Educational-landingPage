/* eslint-disable react/prop-types */
import React from "react";

const CourseCard = ({ img, title }) => {
  return (
    <div className="flex flex-col items-center justify-between bg-gray-100 border-2 border-gray-300 rounded-lg p-4 transition-all md:flex-row md:items-start md:border-none">
      <div className="w-3/5 md:w-2/5">
        <img src={img} alt={title} className="w-full h-auto rounded-md" />
      </div>
      <div className="mt-5 text-center md:mt-0 md:text-left md:ml-5">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
