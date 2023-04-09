import React, { useContext } from "react";
import Course from "../Course/Course";
import { courseContext } from "../Home/Home";

const Courses = () => {
  const data = useContext(courseContext);
  return (
    <div className="my-28 container w-11/12 mx-auto">
      <h1 className="text-3xl font-bold text-center uppercase underline">
        Our Best Selling Courses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
        {data.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
