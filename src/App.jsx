import React, {  useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Newpost from "./components/Newpost";

function App() {
  const [file, setFile] = useState();
  const [image, setImage] = useState();

  useEffect(()=>{
    const getImage = ()=>{
      const img = new Image();
      img.src = URL.createObjectURL(file);

      img.onload = ()=>{
          setImage({
        url: img.src,
        width: img.width,
        height: img.height
      });
      };
    };
    file && getImage();
  }, [file]);
  

  return (
    <div>
      <Navbar />
      {image ? (
        <Newpost image={image} />
        ) : (
      <div className="newPostCard">
        <div className="addPost">
          <img src="../Aimage.png" alt="" className="avatar" />
          <div className="postForm">
            <input
              type="text"
              placeholder="what's on your mind ?"
              className="postInput"
            />
            <label htmlFor="file">
              <img
                className="addImg"
                src="../imagep.png"
                alt=""
              />
              <img
                className="addImg"
                src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84451/preview.svg"
                alt=""
              />
              <button>send</button>
            </label>
            <input 
            onChange={(e) => setFile(e.target.files[0])}
            id="file"
            style={{ display: "none" }} type="file" />
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default App;
