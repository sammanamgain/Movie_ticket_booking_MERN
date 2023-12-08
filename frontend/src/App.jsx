import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";


import './app.css'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/sign-up' element={<Signup />}></Route>
        <Route path='/sign-in' element={<Login />}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
