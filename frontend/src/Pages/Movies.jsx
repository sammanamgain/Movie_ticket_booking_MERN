import * as React from "react";
import { useEffect, useState } from "react";
import Cardbox from "../Components/Card.jsx";
import About from "../Components/About.jsx";
export default function Home() {
  const [movie, setmovie] = useState([]);
  const [called, usecalled] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://amgain-movie-threature.onrender.com/api/v1/movie/getall",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
      const data = await response.json();
      if (data.success === true) {
        setmovie((prevMovie) => {
          const updatedMovie = [...prevMovie, ...data.movielist];
          console.log(updatedMovie);
          usecalled(false);

          return updatedMovie;
        });
      }
      //console.log(data.movielist);
    })();
  }, []);

  return (
    <>
      <div className='text-5xl text-center mt-2 italic'>All Movies</div>
      <div className='w-full   md:flex-1 '>
        {called ? (
          <div>Loading....please wait</div>
        ) : (
          <div className='flex  flex-wrap   justify-between  gap-14 m-10 '>
            {movie.map((ele) => (
              <Cardbox data={ele} key={ele._id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
