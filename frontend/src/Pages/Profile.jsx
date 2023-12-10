import React from 'react'
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
export default function Profile() {
    const { currentUser, name, email } = useSelector((state) => state.user);
    console.log(name);
    return (
      <div className='h-[70vh] w-[80vh] flex flex-col items-center justify-center p-14 m-auto'>
        <div className='bg-[#bacfdb] h-full w-full shadow-lg'>
          <form className=' flex flex-col justify-center p-12 mt-14'>
            <div className='h-[10vh] text-xl'>
              <label htmlFor='name'> UserName: </label>
              <input type='text' id='name' value={name} disabled></input>
            </div>
            <div className='text-xl'>
              <label htmlFor='email'> Email: </label>
              <input
                className='ml-10'
                type='text'
                id='email'
                value={email}
                disabled
              ></input>
            </div>
          </form>
        </div>
      </div>
    );
}
