import React from "react";
import "./App.css";
import myImage from "./2.jpeg";
import "./style.css";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">chicken nugget</h1>

        <br></br>

        <img src="/1.jpeg" alt="chicken" className="center" />

        <br></br>

        <img src={myImage} alt="chiken" className="center" />
      </div>

      <video width="320" height="240" controls className="center">
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
