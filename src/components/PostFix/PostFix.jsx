import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { fixDiet } from "../../api/diets";
import { getDiets } from "../../api/diets";
import useInput from "../../hooks/useInput";
import CurrentTime from "../CurrentTime/CurrentTime";
import { styled } from "styled-components";
import ButtonContainer from "../common/Button";
import { useQueryClient } from "react-query";

function PostFix() {
  const { data } = useQuery("diets", getDiets);
  const params = useParams();
  const queryClient = useQueryClient();
  const filteredDiet = data.find((item) => {
    return item.id == params.id;
  });

  const [writer, handleWriter] = useInput(filteredDiet.writer);
  const [title, handleTitle] = useInput(filteredDiet.title);
  const [contents, handleContents] = useInput(filteredDiet.contents);
  const [selectedFile, setSelectedFile] = useState();
  const [imgUrl, setImgUrl] = useState(filteredDiet.imgUrl);
  const testRef = useRef();

  const mutation = useMutation(fixDiet, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("diets");
    },
  });

  const fileOnLoad = (e) => {
    setSelectedFile(e.target.files[0]);
    console.log(e.target.files[0]);
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

  // 폼 수정 버튼 클릭 시
  const handlePatchButtonClick = (e) => {
    e.preventDefault();

    const newDiet = {
      writer,
      title,
      contents,
      imgUrl,
      id: filteredDiet.id,
      date: CurrentTime(),
    };

    mutation.mutate(newDiet);

    window.location.replace("/list");
  };

  return (
    <Container>
      <form onSubmit={handlePatchButtonClick}>
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
        />
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
            수정하기
          </ButtonContainer>
        </ButtonBox>
      </form>
    </Container>
  );
}

export default PostFix;

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
  height: 200px;
  font-size: 23px;
`;

const ButtonBox = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
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
