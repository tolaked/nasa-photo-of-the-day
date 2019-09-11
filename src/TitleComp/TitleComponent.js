import React, { useState } from "react";
import axios from "axios";
import Title from "./Title";

function TitleComponent() {
  const [title, setTitle] = useState();

  let pageTitle;
  axios
    .get("https://lambda-github-api-server.herokuapp.com")
    .then(res => {
      pageTitle = res.data.title;
      setTitle(pageTitle);
    })
    .catch(error => {
      return "Something went wrong";
    });
  return (
    <div>
      <Title title={title} />
    </div>
  );
}

export default TitleComponent;
