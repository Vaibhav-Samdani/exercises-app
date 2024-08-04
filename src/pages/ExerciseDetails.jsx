import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const ExerciseDetails = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  const getData = async () => {
    fetchData(url, exerciseOptions).then((ele) => setData(ele));
  };

  const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;
  useEffect(() => {
    getData();
  }, [id]);

  return (
    <section id="exercises" className="pt-28 min-h-screen w-screen">
      {
        <div className=" h-full min-w-full flex justify-center items-center flex-col">
          <h1 className="font-dm font-bold text-4xl" style={{textTransform:'capitalize'}}>{data.name}</h1>
          <img src={data.gifUrl} width={300} alt="" />
          <button style={{textTransform:'capitalize'}} className="rounded-md bg-red-600 text-white min-w-16 font-poppins m-1">
            {data.bodyPart}
          </button>
          <button style={{textTransform:'capitalize'}} className="rounded-md bg-red-600 text-white min-w-16 font-poppins m-1">
            {data.target}
          </button>
          <button style={{textTransform:'capitalize'}} className="rounded-md bg-green-800 text-white min-w-36 font-poppins ">
            {data.secondaryMuscles?.map((ele) => (
              <li className="m-1" style={{ listStyle: "none" }}>
                {ele}
              </li>
            ))}
          </button>
          <ol className="rounded-md  text-black text-left m-10 w-25 font-poppins ">
            {data.instructions?.map((ele) => (
              <li className="m-1 " style={{ listStyle: "number" }} key={ele.id}>
                {ele}
              </li>
            ))}
          </ol>

          <h1 style={{textTransform:'capitalize'}} className="mb-10 font-dm font-medium text-gray-900 bg-amber-500 p-2 rounded-md">
            Equipment : {data.equipment}
          </h1>
        </div>
      }
    </section>
  );
};

export default ExerciseDetails;
