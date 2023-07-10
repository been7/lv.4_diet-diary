import React from "react";
import { styled } from "styled-components";

function Layout({ children }) {
  return <Container>{children}</Container>;
}

export default Layout;

const Container = styled.div`
  width: 1200px;
  height: 0 auto;
  margin-top: 150px;

  border: 1px solid black;
`;
