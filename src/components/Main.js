import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import About from "../pages/About";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Picture from "../pages/Picture";
import New from "../pages/New";
import Edit from "../pages/Edit";
import Contact from "../pages/Contact";

export default function Main(props) {
  const URL = "cc-photography-backend.herokuapp.com/";

  const [picture, setPicture] = useState([]);

  const getPicture = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setPicture(data);
  };
  
  const createPicture = async (picture) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(picture),
    });
    getPicture();
  };

  const updatePicture = async (picture, id) => {
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(picture),
    });
    getPicture();
  };

  const deletePicture = async (id) => {
    await fetch(URL + id, {
      method: "DELETE",
    });
    getPicture();
  };

  useEffect(() => {
    getPicture();
    console.log(picture);
  }, []);

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home picture={picture} />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/picture" element={<Gallery picture={picture}/>} />
        <Route path="/picture/:id" element={<Picture picture={picture} />} />
        <Route
          path="/picture/new"
          element={<New picture={picture} createPicture={createPicture} />}
        />
        <Route
          path="/picture/:id/edit"
          element={
            <Edit picture={picture} updatePicture={updatePicture} deletePicture={deletePicture} />
          }
        />
      </Routes>
    </div>
  );
}