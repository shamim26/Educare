import React, { createContext } from "react";
import { useLoaderData } from "react-router-dom";
import cover from "../../assets/cover-image.jpg";
import Courses from "../Courses/Courses";

export const courseContext = createContext([]);
const Home = () => {
  const data = useLoaderData();
  return (
    <courseContext.Provider value={data}>
      <div>
        <header
          className="h-[50vh] md:h-screen  bg-cover flex flex-col items-center justify-center bg-fourth bg-blend-multiply space-y-8 text-white"
          style={{ backgroundImage: `url(${cover})` }}
        >
          <h1 className="md:text-5xl uppercase text-3xl  font-bold text-center">
            Ensuring You The Best <br /> Quality Of Education
          </h1>
          <button className="text-lg font-semibold mx-auto block outline outline-2 px-5 py-2 hover:bg-fourth hover:outline-fourth transition-all duration-150 ease-in-out ">
            Explore Now
          </button>
        </header>
      </div>
      <div>
        <Courses></Courses>
      </div>
    </courseContext.Provider>
  );
};

export default Home;
