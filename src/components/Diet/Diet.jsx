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

  // 버튼 클릭했을 때 모달 오픈
  const openModal = () => {
    setIsOpen(true);
  };

  const openFixModal = () => {
    setIsFixOpen(true);
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

  const handleFixButton = () => {
    if (confirmPw == filteredDiet.password) {
      setIsFixOpen(false);
      navigate(`/fix/${filteredDiet.id}`);
    } else if (confirmPw != filteredDiet.password) {
      return alert("비밀번호를 다시 입력하세요.");
    }
  };

  // 모달창에서 취소버튼 눌렀을 때
  const cancelButton = () => {
    setIsOpen(false);
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
            // name="fixBtn"
            onClick={openFixModal}
          >
            수정
          </ButtonContainer>
          {isFixOpen && (
            <Modal
              name="fixBtn"
              handleFixButton={handleFixButton}
              cancelButton={cancelButton}
            >
              수정하려면 비밀번호를 입력하세요.
              <br />
              <input
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
            // name="delBtn"
            onClick={openModal}
          >
            삭제
          </ButtonContainer>
          {isOpen && (
            <Modal
              name="delBtn"
              closeModal={closeModal}
              cancelButton={cancelButton}
            >
              삭제하려면 비밀번호를 입력하세요.
              <br />
              <input
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
