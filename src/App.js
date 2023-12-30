import "./App.css";
import Home from "./Pages/Home";
import Nav from "../src/Component/nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Details from "./Component/pageCompo/Details";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div className="App">
      <i>ok</i>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Profile/>} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects/>} />
          <Route path="projects" element={<Details/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
