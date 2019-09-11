import React, { useState } from "react";
import axios from "axios";
import ExplanationComp from "./ExplanationComp";

function Explanation() {
  let pageExplanation;
  const [explanation, setDate] = useState();
  axios
    .get("https://lambda-github-api-server.herokuapp.com")
    .then(res => {
      console.log(res.data);
      pageExplanation = res.data.explanation;
      setDate(pageExplanation);
    })
    .catch(error => {
      return "Something went wrong";
    });
  return (
    <div>
      <ExplanationComp explanation={explanation} />
    </div>
  );
}

export default Explanation;
