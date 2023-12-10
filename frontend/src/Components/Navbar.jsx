import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  signInsuccess,
  setUser,
  setEmail,
  logOut,
} from "../redux/user/userSlice";
export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleclick = async () => {
    const data = await fetch("http://localhost:5000/api/v1/user/logout", {
      method: "GET",
    });
    const resolved = await data.json();
    console.log(resolved);
    if (resolved.success === true) {
      dispatch(logOut());
      navigate("/sign-in");
    }
  };
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
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
          {currentUser ? (
            <Link to='/profile'>
              <div className='px-3'>Profile</div>
            </Link>
          ) : (
            <Link to='/sign-in'>
              <div className='px-3'>Login</div>
            </Link>
          )}
          {currentUser && (
            <button onClick={handleclick} className='px-3'>
              Log Out
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
