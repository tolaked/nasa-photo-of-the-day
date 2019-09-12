import React, { useState } from "react";
import axios from "axios";
import TitleComponent from "./TitleComp/Title";
import "./App.css";
import MainContent from "./MainContent";
import Footer from "./Footer";

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
  const { title, url, explanation, date, copyright } = state;
  return (
    <div className="App">
      <TitleComponent title={title} date={date} />
      <MainContent url={url} explanation={explanation} />
      <Footer copyright={copyright} />
    </div>
  );
}

export default App;
