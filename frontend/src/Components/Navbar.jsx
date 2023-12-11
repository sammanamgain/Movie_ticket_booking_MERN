import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faClapperboard,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
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
        <Link className='flex ' to='/'>
          <FontAwesomeIcon className='pt-1' icon={faHouse} />
          <div className='ml-8'>Home</div>
        </Link>

        <div className='flex gap-8 '>
          <Link className='flex' to='/movies'>
            <FontAwesomeIcon className='pt-1' icon={faClapperboard} />
            <div className='px-3'>Movies</div>
          </Link>
          {currentUser ? (
            <Link className='flex' to='/profile'>
              <FontAwesomeIcon icon={faUser} className='pt-1' />
              <div className='px-3'>Profile</div>
            </Link>
          ) : (
            <Link className='flex' to='/sign-in'>
              <FontAwesomeIcon icon={faRightFromBracket} className='pt-1' />
              <div className='px-3'>Login</div>
            </Link>
          )}
          {currentUser && (
            <div className="flex">
              <FontAwesomeIcon icon={faRightFromBracket} className='pt-1' />
              <button onClick={handleclick} className='px-3'>
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
