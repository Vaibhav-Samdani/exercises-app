import React from "react";

const Home = () => {
  return (
    <>
      <section className="h-screen bg-blue-600 bg-fitness-home bg-center bg-cover bg-no-repeat flex justify-center md:justify-normal text-white">
        <div className="w-full md:w-6/12 h-full flex justify-center items-center flex-col">
          <div className=" flex justify-around  flex-col items-start w-4/6 h-1/5 ">
            <h1 className="font-extrabold antialiased font-dm text-4xl">
              Fitness Club
            </h1>
            <h3 className="font-poppins text-xl font-medium ">
              Sweet, Smile And Repeat
            </h3>
            <a
              href="#exercises"
              className="outline-none bg-red-600 p-2 rounded-md w-2/5"
            >
              Explore
            </a>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center h-screen">
        <div className="h-4/6 flex flex-col justify-around items-center bg-blue-500">
          <h1 className="font-extrabold antialiased font-dm text-4xl">
            Awesome Exercises You Should Know
          </h1>
          <div className="rounded-md border-2 w-5/6 flex ">
            <input
              className="outline-none border-2 h-10 grow"
              type="text"
              placeholder="Search Exercises"
            />
            <button className="grow">Search</button>
          </div>
          <div>
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div>Arrows</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
