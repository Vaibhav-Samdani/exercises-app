import React from "react";
import gym from "../assets/gym.svg";
const Exercises = () => {
  return (
    <>
      <section
        id="exercises"
        className="flex justify-center items-center h-screen bg-pink-50"
      >
        <div className="h-4/6 flex flex-col justify-around items-center ">
          <h1 className="font-extrabold antialiased font-dm text-4xl">
            Awesome Exercises You Should Know
          </h1>
          <div className="rounded-md border-2 border-slate-800 w-5/6 flex bg-white">
            <input
              className="outline-none  h-10 grow
              bg-white placeholder-shown:pl-2 rounded-l-md font-dm"
              type="text"
              placeholder="Search Exercises"
            />
            <button className="grow outline-none bg-red-600 p-2  w-1/5 text-white font-dm">
              Search
            </button>
          </div>
          <div className="h-3/5 border-2 border-slate-50 rounded-md bg-red-100 w-4/5 ">
            <div className="h-5/6 bg-slate-500 flex flex-row  relative rounded-t-md overflow-x-clip">
              <div className="relative h-full w-full flex flex-col justify-evenly items-center bg-white min-w-full">
                <img className="w-1/6" src={gym} alt="Gym" />
                <h2 className="font-extrabold antialiased font-dm text-2xl">
                  All
                </h2>
              </div>
              <div className="relative h-full w-full flex flex-col justify-evenly items-center bg-white min-w-full">
                <img className="w-1/6" src={gym} alt="Gym" />
                <h2 className="font-extrabold antialiased font-dm text-2xl">
                  Back
                </h2>
              </div>
              <div className="relative h-full w-full flex flex-col justify-evenly items-center bg-white min-w-full">
                <img className="w-1/6" src={gym} alt="Gym" />
                <h2 className="font-extrabold antialiased font-dm text-2xl">
                  Cardio
                </h2>
              </div>
              <div className="relative h-full w-full flex flex-col justify-evenly items-center bg-white min-w-full">
                <img className="w-1/6" src={gym} alt="Gym" />
                <h2 className="font-extrabold antialiased font-dm text-2xl">
                  Chest
                </h2>
              </div>
            </div>
            <div className="h-1/6">Arrows</div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Exercises;
