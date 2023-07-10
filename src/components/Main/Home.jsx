import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <div
        onClick={() => navigate("/write")}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <p>일기 쓰기</p>
        <p>이동아이콘</p>
      </div>
      <div
        onClick={() => navigate("/list")}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <p>일기 모음</p>
        <p>이동아이콘</p>
      </div>
    </main>
  );
}

export default Home;
