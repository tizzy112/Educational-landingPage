import React from "react";

const ReviewCard = (props) => {
  return (
    <div className="w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg hover:shadow">
      <div>
        <p className="text-lightText">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quasi
          necessitatibus laudantium atque rerum veritatis inventore! Quibusdam
          minus consequuntur aperiam.
        </p>
      </div>
      <div className="flex flex-row justify-center">
        <img className="rounded-full w-1/4" src={props.img} alt="img" />
      </div>
    </div>
  );
};

export default ReviewCard;
