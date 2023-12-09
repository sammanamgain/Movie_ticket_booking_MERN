import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  return (
    <header className='bg-slate-300 shadow-md text-xl'>
      <div className='flex justify-between items-center max-w-6xl p-3 mx-auto '>
        <Link to='/'>
          <div className='ml-8'>Home</div>
        </Link>

        <div className='flex gap-8 '>
          <Link to='/movies'>
            <div className='px-3'>Movies</div>
          </Link>
          <Link to='/sign-in'>
            <div className='px-3'>Login</div>
          </Link>
        </div>
      </div>
    </header>
  );
}
