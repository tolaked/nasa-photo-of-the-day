import React from "react";
import styled from "styled-components";

const Display = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Image = styled.img`
  width: 40%;
  border-radius: 10px;
  height: 400px;
`;

const Paragragph = styled.p`
  line-height: 200%;
  padding-left: 10px;
`;

function MainContent(props) {
  return (
    <Display>
      <Image src={props.url} />
      <Paragragph>{props.explanation}</Paragragph>
    </Display>
  );
}

export default MainContent;
