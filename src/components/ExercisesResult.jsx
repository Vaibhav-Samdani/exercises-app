import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import { Link } from "react-router-dom";

const ExercisesResult = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1)

  const getData = async () => {
    try {
      fetchData(url, exerciseOptions).then((ele) => setData(ele));
    } catch (error) {
      console.log(error);
      
    }
    
  };

  const url = `https://exercisedb.p.rapidapi.com/exercises?limit=20&offset=${page}`;
  useEffect(() => {
    // getData();
  }, [page]);
  console.log(data);
  

  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="mt-20 min-h-4/5 w-5/6">
        <h1 className="font-extrabold antialiased font-dm text-4xl">
          Showing Results
        </h1>

        <div className="m-10 border-2">
          <button onClick={()=>{setPage(page=> page-1)}} disabled={page===1} className="border-2 w-1/6">Pre</button>
          <button disabled className="border-2 w-1/6">{page}</button>
          <button onClick={()=>{setPage(page=> page+1)}} className="border-2 w-1/6">Next</button>
        </div>

        <div className="flex flex-wrap justify-evenly items-start">
          {data?.map((ele) => (
            <Link
              to={`/exercise/${ele.id}`}
              key={ele.id}
              className="m-5 border-2 "
            >
              <img height={200} src={ele.gifUrl} alt="" loading="lazy"/>

              <Link to={`/exercise/${ele.id}`} style={{textTransform:'capitalize'}} className=" text-black font-extrabold antialiased font-dm text-sm">
                {ele.name}
              </Link>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExercisesResult;
