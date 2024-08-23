import React from "react";
import Heading from "../layout/Heading";
import ReviewCard from "../layout/ReviewCard";
const Reveiws = () => {
  return (
    <div className="min-h-[80vh] flex-col items-center justify-center md:px-32 px-5">
      <Heading title1="Our" title2="Reviews" />
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard
          img={
            "https://th.bing.com/th/id/OIP.QSJRXqeAhkQrJWS7LsMYEgHaE9?w=277&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          }
        />
        <ReviewCard
          img={
            "https://th.bing.com/th/id/OIP.MrzF4ZLZRtt3klgpakEy-gAAAA?w=205&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          }
        />
        <ReviewCard
          img={
            "https://th.bing.com/th/id/OIP.uvn3hk-tdeo150HVnFXzMQHaEK?w=331&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          }
        />
      </div>
    </div>
  );
};

export default Reveiws;
