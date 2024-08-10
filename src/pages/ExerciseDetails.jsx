import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const ExerciseDetails = () => {
  const { id } = useParams();

  const [data, setData] = useState({
    name: "vaibhav",
    gifUrl:
      "https://dummyimage.com/600x600/fcb3fc/000000.gif&text=Vaibhav+Samdani",
    bodyPart: "hand",
    target: "muscle",
    secondaryMuscles: ["one", "two"],
    instructions: ["THis is line one", "This is line two"],
    equipment: "exercise equipment",
  });

  const getData = async () => {
    fetchData(url, exerciseOptions).then((ele) => setData(ele));
  };

  const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;
  useEffect(() => {
    // getData();
    setData({
      name: "Exercise-Name",
      gifUrl:
        "https://dummyimage.com/600x600/fcb3fc/000000.gif&text=Vaibhav+Samdani",
      bodyPart: "bodyPart",
      target: "target",
      secondaryMuscles: ["MusclesOne", "MusclesTwo"],
      instructions: ["THis is instruction one", "This is instruction two"],
      equipment: "exercise equipment",
    });
  }, [id]);

  return (
    <section
      id="exercises"
      className="pt-28 min-h-screen min-w-screen flex flex-col md:flex-row bg-slate-900"
    >
      {
        <>
          <div className=" min-h-full min-w-full md:w-3/6 flex justify-start md:pt-28 gap-7 items-start pl-16 md:pl-40 flex-col">
            <h1
              className="text-white font-dm font-bold text-4xl"
              style={{ textTransform: "capitalize" }}
            >
              {data.name}
            </h1>
            <button
              style={{ textTransform: "capitalize" }}
              className="text-slate-300 min-w-16 font-poppins"
            >
              Body Part : {data.bodyPart}, {data.target}
            </button>
            {/* <button
              style={{ textTransform: "capitalize" }}
              className="rounded-md bg-red-600 text-white min-w-16 font-poppins m-1"
            >
              
            </button> */}
            <div
              style={{ textTransform: "capitalize" }}
              className="rounded-md bg-green-800 text-white min-w-36 p-2 font-poppins "
            >
              {data.secondaryMuscles?.map((ele) => (
                <span className="m-1">
                  {ele}{" "}
                  {data.secondaryMuscles[data.secondaryMuscles.length - 1] ===
                  ele
                    ? ""
                    : ","}
                </span>
              ))}
            </div>
            <h1
              style={{ textTransform: "capitalize" }}
              className="font-dm font-medium text-gray-900 bg-amber-500 p-2 rounded-md"
            >
              Equipment : {data.equipment}
            </h1>
            <ul className="rounded-md mt-3 flex flex-col gap-2 text-left w-25 font-poppins text-white">
              {data.instructions?.map((ele) => (
                <li
                  className=" list-inside list-decimal"
                  key={ele.id}
                >
                  {ele}
                </li>
              ))}
            </ul>
          </div>

          <div className="min-h-full w-full md:w-3/6 flex justify-center items-center md:items-start md:pr-20 pt-24">
            <img src={data.gifUrl} width={350} alt="" />
          </div>
        </>
      }
    </section>
  );
};

export default ExerciseDetails;
