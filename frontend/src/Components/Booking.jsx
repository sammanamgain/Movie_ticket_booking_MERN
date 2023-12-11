import { useState } from "react";

export default function Booking(props) {
  // console.log("is this called");
  const [seatNumber, setnumber] = useState(0);
  const currentDate = new Date().toISOString().slice(0, 16);
  const [showdate, setdate] = useState(currentDate);
  const [time, settime] = useState(0);
  const [confirmed, setconfirmed] = useState(true);
  const [error, seterror] = useState(false);
  const apirequest = async () => {
    console.log("submission called");
    const data = { seatNumber: seatNumber, showtime: showdate };
    console.log(data);
    console.log(props.data);
    const id = props.data;
    const response = await fetch(
      `https://amgain-movie-threature.onrender.com/api/v1/movie/booking/${props.data}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(data),
      }
    );
    const data1 = await response.json();
    if (data1.success === true) {
      setconfirmed(false);
    } else {
      seterror(data1.message);
    }
    console.log(data1);
  };
  const changeseat = (e) => {
    const value = e.target.value;
    // console.log(value)
    setnumber(value);
  };
  const changedate = (e) => {
    //console.log(e.target.value)
    const value = e.target.value;
    const dateObject = new Date(value);

    setdate(dateObject);
  };
  const changetime = (e) => {
    settime(e.target.value);
  };

  //console.log(seatNumber, showdate, time);
  console.log(showdate);

  return (
    <div>
      <div className='bg-gray-200 p-3 rounded-md shadow-md flex md:flex-row'>
        <div className='mb-4 '>
          <label
            htmlFor='seatNumber'
            className='block text-sm font-semibold text-gray-700'
          >
            Seat Number:
          </label>
          <input
            onChange={changeseat}
            value={seatNumber}
            type='Number'
            id='seatNumber'
            className='w-full p-2 border border-gray-300 rounded-md'
          />
        </div>

        <div>
          <label
            htmlFor='showTime'
            className='block text-sm font-semibold text-gray-700'
          >
            Show Time:
          </label>
          <input
            onChange={changedate}
            type='datetime-local'
            id='showTime'
            value={showdate}
            className='w-full p-2 border border-gray-300 rounded-md'
            list='timeOptions'
          />
          <datalist id='timeOptions' onChange={changetime}>
            <option value={`${currentDate}T07:00`}>7:00 AM</option>
          </datalist>
        </div>
      </div>
      <div className='bg-blue-300 p-3 rounded-md shadow-md flex md:flex-row justify-center'>
        <button className='bg-blue-300 p-3 w-full' onClick={apirequest}>
          {confirmed ? "Confirm It" : "Ticket Confirmed!"}
        </button>
      </div>
      {error ? <div> {error}</div> : <div></div>}
    </div>
  );
}
