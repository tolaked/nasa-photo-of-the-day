import React from "react";
import styled from "styled-components";

const Display = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Image = styled.img`
  width: 60%;
  border-radius: 10px;
`;

const Paragragph = styled.p``;

function MainContent(props) {
  return (
    <Display>
      <Image src={props.url} />
      <Paragragph>{props.explanation}</Paragragph>
    </Display>
  );
}

export default MainContent;
