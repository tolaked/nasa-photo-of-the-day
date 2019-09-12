import React from "react";
import styled from "styled-components";

const Heading = styled.div`
  background: green;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
`;
const Paragraph = styled.p`
  color: white;
`;
const H4 = styled.h4`
  color: white;
  font-size: 30px;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

function Title(props) {
  return (
    <Heading>
      <H4>{props.title}</H4>
      <Paragraph>{props.date}</Paragraph>
    </Heading>
  );
}

export default Title;
