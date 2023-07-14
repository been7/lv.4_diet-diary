import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { delDiet, getDiets } from "../../api/diets";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { styled } from "styled-components";
import ButtonContainer from "../common/Button";
import noImage from "../../assets/noImage.jpg";
import Modal from "../common/Modal";
import loading from "../../assets/loading.gif";
import useInput from "../../hooks/useInput";

function Diet() {
  const params = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [confirmPw, handleConfirmPw] = useInput("");
  const [isOpen, setIsOpen] = useState(false);
  const [isFixOpen, setIsFixOpen] = useState(false);
  const { isLoading, isError, data } = useQuery(["diets"], getDiets);

  const filteredDiet = data.find((item) => {
    return item.id == params.id;
  });

  // 리액트 쿼리 삭제
  const { mutate, isLoading: loadingMutation } = useMutation(delDiet, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(["diets"]);
      navigate("/list");
    },
  });

  // 수정, 삭제 버튼 클릭 시 모달 오픈
  const openModal = (message) => {
    switch (message) {
      case "fixBtn":
        setIsFixOpen(true);
        break;
      case "delBtn":
        setIsOpen(true);
        break;
    }
  };

  // 모달창에서 취소 버튼 클릭 시 모달창 닫기
  const cancelModal = (message) => {
    switch (message) {
      case "fixBtn":
        setIsFixOpen(false);
        break;
      case "delBtn":
        setIsOpen(false);
        break;
    }
  };

  // 모달창에서 삭제버튼 눌렀을 때 글 삭제
  const closeModal = () => {
    if (confirmPw == filteredDiet.password) {
      setIsOpen(false);
      mutate(filteredDiet.id);
    } else if (confirmPw != filteredDiet.password) {
      return alert("비밀번호를 다시 입력하세요.");
    }
  };

  // 수정 버튼 클릭 시
  const handleFixButton = () => {
    if (confirmPw == filteredDiet.password) {
      setIsFixOpen(false);
      navigate(`/fix/${filteredDiet.id}`);
    } else if (confirmPw != filteredDiet.password) {
      return alert("비밀번호를 다시 입력하세요.");
    }
  };

  if (loadingMutation || isLoading) {
    return <LoadingImg src={loading} />;
  }

  if (isError) {
    return <p>오류가 발생했습니다...!</p>;
  }

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
            onClick={() => openModal("fixBtn")}
          >
            수정
          </ButtonContainer>
          {isFixOpen && (
            <Modal
              name="fixBtn"
              handleFixButton={handleFixButton}
              cancelButton={() => cancelModal("fixBtn")}
            >
              수정하려면 비밀번호를 입력하세요.
              <br />
              <PwInput
                type="password"
                value={confirmPw}
                onChange={handleConfirmPw}
              />
            </Modal>
          )}
          <ButtonContainer
            bc="#A0C49D"
            color="white"
            size="small"
            onClick={() => openModal("delBtn")}
          >
            삭제
          </ButtonContainer>
          {isOpen && (
            <Modal
              name="delBtn"
              closeModal={closeModal}
              cancelButton={() => cancelModal("delBtn")}
            >
              삭제하려면 비밀번호를 입력하세요.
              <br />
              <PwInput
                type="password"
                value={confirmPw}
                onChange={handleConfirmPw}
              />
            </Modal>
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

const PwInput = styled.input`
  width: 250px;
  height: 30px;
  font-size: 23px;
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

const LoadingImg = styled.img`
  height: 500px;
  width: 500px;
  margin-left: 350px;
  margin-top: 100px;
`;
