import React from "react";
import { styled } from "styled-components";
import home from "../../assets/home.png";
import back from "../../assets/back.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <HeaderLayout>
      <Img src={back} onClick={() => navigate(-1)} />
      <h1>식단일기</h1>
      <Img src={home} onClick={() => navigate("/")} />
    </HeaderLayout>
  );
}

export default Header;

const HeaderLayout = styled.header`
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: #a0c49d;
  box-shadow: rgba(120, 120, 120, 0.2) 0px 2px 8px 0px;
`;

const Img = styled.img`
  height: 60px;
  margin-left: 20px;
  margin-right: 20px;
  &:hover {
    cursor: pointer;
  }
`;
