import React from "react";
import { useQuery } from "react-query";
import { getDiets } from "../../api/diets";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import noImage from "../../assets/noImage.jpg";
import loading from "../../assets/loading.gif";

function DietList() {
  const { isLoading, isError, data } = useQuery("diets", getDiets);

  const navigate = useNavigate();

  // 상태 메세지
  if (isLoading) {
    return <LoadingImg src={loading} />;
  }

  if (isError) {
    return <p>오류가 발생했습니다...!</p>;
  }

  return (
    <Container>
      {data
        .toSorted((a, b) => {
          const replaceA = a.date.replace(/[^0-9]/g, "");
          const replaceB = b.date.replace(/[^0-9]/g, "");
          return replaceB - replaceA;
        })
        .map((item) => {
          return (
            <PostBox
              key={item.id}
              onClick={() => navigate(`/detail/${item.id}`)}
            >
              <Img src={item.imgUrl ? item.imgUrl : noImage} />
              <Title>{item.title}</Title>
              <Writer>{item.writer}</Writer>
              <p>{item.date}</p>
            </PostBox>
          );
        })}
    </Container>
  );
}

export default DietList;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  text-align: center;
  gap: 70px;
`;

const PostBox = styled.div`
  border: 1px solid;
  width: 350px;
  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.h2`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Writer = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Img = styled.img`
  width: 350px;
  height: 300px;
  object-fit: contain;
  &:hover {
    transform: scale(1.05);
  }
`;

const LoadingImg = styled.img`
  height: 500px;
  width: 500px;
  margin-left: 350px;
  margin-top: 100px;
`;
