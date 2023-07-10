import React from "react";
import { styled } from "styled-components";

function Header() {
  return (
    <HeaderLayout>
      <h3>Home아이콘</h3>
      <h3>식단일기</h3>
    </HeaderLayout>
  );
}

export default Header;

const HeaderLayout = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background-color: #fff;
  box-shadow: rgba(120, 120, 120, 0.2) 0px 2px 8px 0px;
`;
