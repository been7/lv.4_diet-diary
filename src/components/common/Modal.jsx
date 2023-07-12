import React from "react";
import { styled } from "styled-components";
import ButtonContainer from "./Button";

function Modal(props) {
  return (
    <>
      <StModalBox>
        <StModalContents>
          <p>삭제하시겠습니까?</p>
          <ButtonContainer
            bc="#A0C49D"
            color="white"
            size="small"
            onClick={props.closeModal}
          >
            삭제
          </ButtonContainer>
          <ButtonContainer
            bc="#A0C49D"
            color="white"
            size="small"
            onClick={props.cancelButton}
          >
            취소
          </ButtonContainer>
        </StModalContents>
      </StModalBox>
    </>
  );
}

export default Modal;

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
