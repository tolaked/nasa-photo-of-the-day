import React from "react";

function Title(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.date}</p>
    </div>
  );
}

export default Title;
