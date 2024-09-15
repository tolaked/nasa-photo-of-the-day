import React, { useState } from "react";
import axios from "axios";
import TitleComponent from "./TitleComp/Title";
import ExplanationComp from "./Explanation/Explanation";
import "./App.css";
import ImageComp from "./image/ImageComp";

function App() {
  const [state, setState] = useState({});

  const myData = () => {
    axios
      .get("https://lambda-github-api-server.herokuapp.com")
      .then(res => {
        setState(res.data);
      })
      .catch(error => {
        return "Something went wrong";
      });
  };

  React.useEffect(myData, []);
  const { title, url, explanation, date } = state;
  return (
    <div className="App">
      <TitleComponent title={title} date={date} />
      <ExplanationComp explanation={explanation} />
      <ImageComp url={url} />
    </div>
  );
}

export default App;
