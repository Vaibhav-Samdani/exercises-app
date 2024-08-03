import React from "react";
import Home from "../components/Home";
import Exercises from "../components/Exercises";
import ExercisesResult from "../components/ExercisesResult";

const LandingPage = () => {
  return (<>
    <Home />
    {/* <Exercises/> */}
    <ExercisesResult/>
  </>
  );
};

export default LandingPage;
