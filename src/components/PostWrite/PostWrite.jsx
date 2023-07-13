import React, { useRef, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addDiet } from "../../api/diets";
import shortid from "shortid";
import useInput from "../../hooks/useInput";
import { styled } from "styled-components";
import CurrentTime from "../CurrentTime/CurrentTime";
import ButtonContainer from "../common/Button";

function PostWrite() {
  const queryClient = useQueryClient();
  const mutation = useMutation(addDiet, {
    onSuccess: () => {
      queryClient.invalidateQueries("diets");
    },
  });

  const [writer, handleWriter] = useInput("");
  const [title, handleTitle] = useInput("");
  const [contents, handleContents] = useInput("");
  const [selectedFile, setSelectedFile] = useState();
  const [imgUrl, setImgUrl] = useState("");
  const testRef = useRef();

  // 폼 작성 버튼 클릭 시
  const handleSubmitButtonClick = (e) => {
    e.preventDefault();

    const newDiet = {
      writer,
      title,
      contents,
      id: shortid.generate(),
      imgUrl,
      date: CurrentTime(),
    };

    mutation.mutate(newDiet);

    window.location.replace("/list");
  };

  const fileOnLoad = (e) => {
    setSelectedFile(e.target.files[0]);
    saveImgFile();
  };

  const saveImgFile = () => {
    const file = testRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgUrl(reader.result);
    };
  };

  return (
    <Container>
      <form onSubmit={handleSubmitButtonClick}>
        <div>
          <p>작성자</p>
          <WriterTitleInput
            type="text"
            value={writer}
            onChange={handleWriter}
            required
          />
          <p>제목</p>
          <WriterTitleInput
            type="text"
            value={title}
            onChange={handleTitle}
            required
          />
          <p>내용</p>
          <ContentsInput
            type="text"
            value={contents}
            onChange={handleContents}
            required
            minLength="10"
          />
        </div>
        <ButtonBox>
          <FileSelect htmlFor="fileImg">파일 선택</FileSelect>
          <FileInput
            type="file"
            name="img"
            id="fileImg"
            accept="image/png, image/jpeg"
            onChange={fileOnLoad}
            ref={testRef}
          />
          <ButtonContainer
            type="submit"
            bc="#A0C49D"
            color="white"
            size="small"
          >
            작성하기
          </ButtonContainer>
        </ButtonBox>
      </form>
    </Container>
  );
}

export default PostWrite;

const Container = styled.div`
  padding-left: 300px;
  padding-right: 300px;
  margin-top: 30px;
`;

const WriterTitleInput = styled.input`
  width: 300px;
  height: 30px;
  font-size: 23px;
`;

const ContentsInput = styled.textarea`
  width: 600px;
  height: 250px;
  font-size: 23px;
`;

const FileSelect = styled.label`
  display: flex;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: #a0c49d;
  color: white;
  height: 40px;
  width: 100px;
  font-size: 20px;
  margin-top: 5px;
  justify-content: space-around;
  align-items: center;
  &:hover {
    font-size: 14px;
    font-weight: bold;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const ButtonBox = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
`;
