import * as React from 'react';
import { useEffect, useState } from 'react';
import Cardbox from '../Components/Card.jsx';
export default function Home() {
  const [movie, setmovie] = useState([]);
  const [called, usecalled] = useState(true);
  useEffect(() => {
    
    (async () => {
      const response = await fetch("http://localhost:5000/api/v1/movie/getall", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const data = await response.json();
      if (data.success === true)
      {
        usecalled(false);
        }
      //console.log(data.movielist);
      setmovie([...movie,...(data.movielist)]);
     })();
  
},[])
  
  console.log(movie[0])
  console.log(typeof(movie))


  return (
    <div className='w-full  md:w-[2500px] md:flex-1  md:w-[100%]'>
      {called ? (
        <div>Loading....please wait</div>
      ) : (
        <div className='flex flex-wrap m-10 md:flex md:flex-wrap md:justify-between  '>
          {movie.map((ele) => (
            <Cardbox
              data={ele}
              key={ele.url}
              className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex-shrink-0'
            />
          ))}
        </div>
      )}
    </div>
  );
}
