import React from "react";
import { styled } from "styled-components";

function Layout({ children }) {
  return <Container>{children}</Container>;
}

export default Layout;

const Container = styled.div`
  position: relative;
  width: 1200px;
  margin: 0 auto;

  @media (min-width: 500px) {
    width: 500px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1170px;
  }
`;
