import "./App.css";
import {NavBar, Footer} from "./Components"
import { Route, Routes } from "react-router-dom";
import { Home, About, Contact, Services } from "./Pages";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
