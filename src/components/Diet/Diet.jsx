import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { delDiet, getDiets } from "../../api/diets";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { styled } from "styled-components";
import ButtonContainer from "../common/Button";
import noImage from "../../assets/noImage.jpg";
import Modal from "../common/Modal";

function Diet() {
  const params = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, isError, data } = useQuery(["diets"], getDiets);

  // 리액트 쿼리 삭제
  const {
    mutate,
    mutateAsync,
    isLoading: loadingMutation,
  } = useMutation(delDiet, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(["diets"]);
      navigate("/list");
    },
  });

  // 삭제버튼 클릭했을 때 모달 오픈
  const openModal = () => {
    setIsOpen(true);
  };

  // 모달창에서 삭제버튼 눌렀을 때 글 삭제
  const closeModal = async () => {
    setIsOpen(false);
    mutate(filteredDiet.id);
  };

  // 모달창에서 취소버튼 눌렀을 때
  const cancelButton = () => {
    setIsOpen(false);
  };

  console.log("loadingMutation", loadingMutation);

  if (loadingMutation) {
    return <p>삭제중</p>;
  }

  if (isLoading) {
    return <p>로딩중입니다.....!</p>;
  }

  if (isError) {
    return <p>오류가 발생했습니다...!</p>;
  }

  const filteredDiet = data.find((item) => {
    return item.id == params.id;
  });

  return (
    <Container>
      <div>
        <Writer>작성자 : {filteredDiet.writer}</Writer>
        <Title>{filteredDiet.title}</Title>
        <Img src={filteredDiet.imgUrl ? filteredDiet.imgUrl : noImage} />
        <Contents>{filteredDiet.contents}</Contents>
      </div>
      <ButtonBox>
        <div>
          <ButtonContainer
            bc="#A0C49D"
            color="white"
            size="small"
            onClick={() => navigate(`/fix/${filteredDiet.id}`)}
          >
            수정
          </ButtonContainer>
          <ButtonContainer
            bc="#A0C49D"
            color="white"
            size="small"
            onClick={openModal}
          >
            삭제
          </ButtonContainer>
          {isOpen && (
            <Modal closeModal={closeModal} cancelButton={cancelButton}></Modal>
          )}
        </div>
        <div>
          <ButtonContainer
            bc="#A0C49D"
            color="white"
            size="small"
            onClick={() => navigate("/list")}
          >
            목록으로
          </ButtonContainer>
        </div>
      </ButtonBox>
    </Container>
  );
}

export default Diet;

const Container = styled.div`
  text-align: center;
  margin-top: 30px;
`;

const Writer = styled.p`
  font-size: smaller;
`;

const Title = styled.p`
  font-size: xx-large;
`;

const Img = styled.img`
  max-height: 300px;
  width: auto;
`;

const Contents = styled.p`
  font-size: xx-large;
  margin-top: 30px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  margin-left: 300px;
  margin-right: 300px;
`;
