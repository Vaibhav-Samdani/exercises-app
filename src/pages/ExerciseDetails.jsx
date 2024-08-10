import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const ExerciseDetails = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState();

  const getData = async () => {
    fetchData(url, exerciseOptions).then((ele) => setData(ele));
  };

  const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;
  useEffect(() => {
    setLoading(true);
    getData();
    // setData({
    //   name: "name",
    //   bodyPart: "bodyPart",
    //   target: "target",
    //   secondaryMuscles: ["secondaryMuscles"],
    //   equipment: "equipment",
    //   instructions: ["instructions"],
    //   gifUrl: "https://dummyimage.com/600x600/fcb3fc/000000.gif&text=Vaibhav+Samdani"
    // })
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <>
        <h1 className="mt-20">Loading ...</h1>
      </>
    );
  }

  return (
    <section
      id="exercises"
      className="pt-28 min-h-screen min-w-screen flex flex-col md:flex-row bg-slate-900"
    >
      {
        <>
          <div className="text-left min-h-full w-full md:w-3/6 flex justify-start md:pt-28 gap-7 items-start pl-10 pr-10 md:pl-40 flex-col">
            <h1
              className="text-white text-left font-dm font-bold text-4xl"
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
                <li className=" list-inside list-decimal" key={ele.id}>
                  {ele}
                </li>
              ))}
            </ul>
          </div>

          <div className="min-h-full w-full md:w-3/6 flex justify-center items-center md:items-start md:pr-20 pt-24 mb-20 ">
            <img src={data.gifUrl} width={350} alt="" />
          </div>
        </>
      }
    </section>
  );
};

export default ExerciseDetails;
