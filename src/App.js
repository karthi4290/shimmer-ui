import { BrowserRouter, Routes, Route } from "react-router-dom";

import Body from "./components/Body";
import About from "./components/About";
import Login from "./components/Login";
import { ProtectedRoute } from "./components/Helper/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <header className=" text-white bg-black h-14">
        Hello World
        <nav className="p-2 flex -mt-2 justify-between mx-80">
          <a href="/">Home</a>
          <a href="/About">About</a>
          <a href="/Login">Login</a>
        </nav>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/About" element={<About />}></Route>
          </Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
