import React from "react";
import styled from "styled-components";

const Heading = styled.div`
  background: green;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Paragraph = styled.p`
  color: white;
`;
const H4 = styled.h4`
  color: white;
  font-size: 20px;
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
