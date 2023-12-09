import * as React from "react";
import { useEffect, useState } from "react";
import Cardbox from "../Components/Card.jsx";
import About from "../Components/About.jsx";
export default function Home() {
  const [movie, setmovie] = useState([]);
  const [called, usecalled] = useState(true);
  let [featuredmovie, setfeaturedmovie] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "http://localhost:5000/api/v1/movie/getall",
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
          let featured = updatedMovie.slice(0, 4);
          setfeaturedmovie(() => {
            const updatedstate = [...featured];
            usecalled(false)
            return updatedstate;
          });
          console.log(featuredmovie);
          return updatedMovie;
        });
      }
      //console.log(data.movielist);
    })();
  }, []);




  return (
    <>
      <About />
      <div className='w-full   md:flex-1 '>
        {called ? (
          <div>Loading....please wait</div>
        ) : (
          <div className='flex  flex-wrap   justify-between  gap-14 m-10 '>
            {featuredmovie.map((ele) => (
              <Cardbox data={ele} key={ele._id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
