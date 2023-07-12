import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { delDiet, getDiets } from "../../api/diets";
import { useQuery, useMutation, queryClient } from "react-query";
import { styled } from "styled-components";
import ButtonContainer from "../common/Button";
import noImage from "../../assets/noImage.jpg";
import Modal from "../common/Modal";

function Diet() {
  const params = useParams();
  const { isLoading, isError, data } = useQuery("diets", getDiets);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    deleteMutation.mutate(filteredDiet.id);
    window.location.replace("/list");
  };

  const cancelButton = () => {
    setIsOpen(false);
  };

  const deleteMutation = useMutation(delDiet, {
    onSuccess: () => {
      queryClient.invalidateQueries("diets");
    },
  });

  if (isLoading) {
    return <p>로딩중입니다.....!</p>;
  }

  if (isError) {
    return <p>오류가 발생했습니다...!</p>;
  }

  const filteredDiet = data.find((item) => {
    return item.id == params.id;
  });

  const handleDeleteButtonClick = () => {
    deleteMutation.mutate(filteredDiet.id);
    window.location.replace("/list");
  };

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

const StModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StModalContents = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 30%;
  height: 25%;
  border-radius: 12px;
`;
