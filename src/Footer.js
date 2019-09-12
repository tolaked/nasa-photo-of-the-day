import React from "react";
import styled from "styled-components";

const Copyright = styled.footer`
  background: green;
  height: 60px;
  margin-bottom: 0px;
  text-align: center;
  border-radius: 5px;
`;

const Span = styled.span`
  color: white;
  margin: 1em;
`;
function Footer(props) {
  return (
    <Copyright>
      <Span>&copy;{props.copyright}</Span>
    </Copyright>
  );
}

export default Footer;
