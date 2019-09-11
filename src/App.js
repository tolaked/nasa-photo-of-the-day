import React from "react";
import TitleComponent from "./TitleComp/TitleComponent";
import DateComp from "./Date/Date";
import ExplanationComp from "./Explanation/Explanation";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TitleComponent />
      <DateComp />
      <ExplanationComp />
    </div>
  );
}

export default App;
