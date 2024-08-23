import React from "react";
import Heading from "../layout/Heading";
import CourseCard from "../layout/CourseCard";

const Courses = () => {
  return (
    <div className="min-h-screen flex flex-col items-center md:px-32 px-5 my-10">
      <Heading title1="Our" title2="Courses" />

      <div className="flex flex-wrap justify-center gap-6 mt-6">
        <CourseCard
          img={
            "https://media.istockphoto.com/id/1356364287/photo/close-up-focus-on-persons-hands-typing-on-the-desktop-computer-backlit-keyboard-screens-show.webp?b=1&s=612x612&w=0&k=20&c=gmCeQtZj_tBo32I9McGpKy79EyXKLLjAj1DMx9Kfe0k="
          }
          title="web Development"
        />
        <CourseCard
          img={
            "https://media.istockphoto.com/id/1173805365/photo/software-developer-freelancer-working-with-program-code.webp?b=1&s=612x612&w=0&k=20&c=Q7lnvCKOkUbZgkt9hpB6LXnRMKpbPJ2RmLjgAJa5O6g="
          }
          title="App Development"
        />
        <CourseCard
          img={
            "https://media.istockphoto.com/id/2150307552/photo/portrait-of-female-videographer-working-on-a-film-on-her-desktop-computer-focused-woman.webp?b=1&s=612x612&w=0&k=20&c=EX3t29MelJ2DK_YX_0YgQQMGZljVjckgQnqsiRQ8hjo="
          }
          title="Graphic Designer"
        />
        <CourseCard
          img={
            "https://media.istockphoto.com/id/1936789233/photo/human-use-phone-with-digital-online-marketing-commerce-sale-website-advertising-promotion-of.webp?b=1&s=612x612&w=0&k=20&c=udMsiyQy7tFQvPx_xO_qTD83shI6gg47xIZTIPn05PI="
          }
          title="digital marketing"
        />
      </div>
    </div>
  );
};

export default Courses;
