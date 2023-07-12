import React from "react";
import { css } from "styled-components";
import { styled } from "styled-components";

const ButtonContainer = ({ children, onClick, ...rest }) => {
  return (
    <>
      <StButton onClick={onClick} {...rest}>
        {children}
        {rest.rightIcon}
      </StButton>
    </>
  );
};

export default ButtonContainer;

const StButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;

  background-color: ${({ bc }) => bc};
  color: ${({ color }) => color};
  font-weight: 0;
  font-size: 20px;

  margin: 5px;

  ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          height: 50px;
          width: 200px;
        `;
      case "medium":
        return css`
          height: 45px;
          width: 130px;
        `;
      case "small":
        return css`
          height: 40px;
          width: 100px;
        `;
    }
  }}

  ${({ outlined, bc }) => {
    if (outlined) {
      return css`
        border: 3px solid ${bc};
        background-color: #fff;
        font-weight: 600;
      `;
    }
  }}

  &:hover {
    font-size: 14px;
    font-weight: bold;
  }
`;
