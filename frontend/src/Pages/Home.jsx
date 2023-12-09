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
    <div className='w-full   md:flex-1 '>
      {called ? (
        <div>Loading....please wait</div>
      ) : (
        <div className='flex  flex-wrap   justify-between  gap-14 m-10 '>
          {movie.map((ele) => (
            <Cardbox
              data={ele}
              key={ele.url}
              
            />
          ))}
        </div>
      )}
    </div>
  );
}
