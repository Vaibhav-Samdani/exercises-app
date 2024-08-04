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
            <h3 className="font-poppins text-left text-xl font-medium ">
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

    </>
  );
};

export default Home;
