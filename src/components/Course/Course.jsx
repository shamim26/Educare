import React from "react";

const Course = ({ course }) => {
  console.log(course);
  const { title, description, category, cover_image } = course;
  return (
    <div className="card outline outline-2 flex flex-col overflow-hidden">
      <img
        src={cover_image}
        className="w-full h-full transition-all ease-linear duration-200 transform hover:scale-105"
        alt=""
      />
      <div className="card-body p-5 mt-auto space-y-4">
        <h3 className="text-xl font-semibold ">{title}</h3>
        <p className="">{description}</p>
        <h4 className="text-lg font-semibold">{category}</h4>
        <button className="font-semibold block text-white hover:bg-white hover:text-black px-3 py-2 outline outline-2 bg-fourth transition-all ease-linear duration-200 ml-auto">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Course;
