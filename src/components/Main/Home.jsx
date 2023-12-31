import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import arrow from "../../assets/arrow.png";

function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      {/* 작성 페이지로 이동 */}
      <MainBox onClick={() => navigate("/write")}>
        <h2>일기 쓰기</h2>
        <Img src={arrow} />
      </MainBox>
      {/* 목록 페이지로 이동 */}
      <MainBox onClick={() => navigate("/list")}>
        <h2>일기 모음</h2>
        <Img src={arrow} />
      </MainBox>
    </Container>
  );
}

export default Home;

const Container = styled.main`
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 50px;
`;

const Img = styled.img`
  height: 50px;
`;

const MainBox = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f7ffe5;
  padding: 30px;
  margin-top: 50px;
  align-items: center;
  &:hover {
    cursor: pointer;
    box-shadow: rgba(120, 120, 120, 0.2) 0px 2px 8px 0px;
    background-color: #a0c49d;
    color: white;
  }
`;
