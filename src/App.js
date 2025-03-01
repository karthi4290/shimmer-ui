import { BrowserRouter, Routes, Route } from "react-router-dom";

import Body from "./components/Body";
import About from "./components/About";
import Login from "./components/Login";
import { ProtectedRoute } from "./components/Helper/ProtectedRoute";
import { useState } from "react";
import { AccordionParent } from "./components/AccordionData";
import CommentParent from "./components/comments/CommentParent";

function App() {
  const [lang, setLang] = useState("EN");
  return (
    <div className="App">
      <header className=" text-white bg-black h-14">
        Hello World
        <nav className="p-1 flex -mt-2 justify-between mx-80">
          <a href="/">Home</a>
          <a href="/About">About</a>
          <a href="/Accordion">Accordion</a>
          <a href="/Login">Login</a>
          <a href="/NestedComment">Comment</a>
          <select 
          className="text-black outline-none"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
        >
          <option value="EN">English</option>
          <option value="HI">Hindi</option>
          <option value="SP">Spanish</option>
        </select>
        </nav>
       
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/About" element={<About data={lang} />}></Route>
          </Route>
          <Route path="/Accordion" element={<AccordionParent/>}></Route>
          <Route path="/NestedComment" element={<CommentParent/>}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
