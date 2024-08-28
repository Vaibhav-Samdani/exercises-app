import React from "react";


const Home = () => {
  return (
    <>
      <section className="h-screen bg-slate-900 bg-fitness-home bg-center bg-cover bg-no-repeat flex justify-center md:justify-normal text-white">
        <div className="w-full md:w-6/12 h-full flex justify-center items-center flex-col">
          <div className=" flex justify-around  flex-col items-start md:pl-16 w-auto h-1/5 md:h-1/4">
            <h1 className="font-extrabold antialiased font-dm text-3xl md:text-4xl md:pb-7 pb-5">
            The FitPulse
            </h1>
            <h3 className="font-poppins text-left text-base md:text-xl w-80 md:w-96 md:pb-7 font-normal pb-5 drop-shadow-2xl">
              Personalized workouts and expert guidance for a healthier, stronger you. Start today!
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
