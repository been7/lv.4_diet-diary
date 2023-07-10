import React, { useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addDiet } from "../../api/diets";
import shortid from "shortid";
import { getDiets } from "../../api/diets";

function PostWrite() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fileInput = useRef(null);

  const { data } = useQuery("diets", getDiets);

  const queryClient = useQueryClient();
  const mutation = useMutation(addDiet, {
    onSuccess: () => {
      queryClient.invalidateQueries("diets");
      console.log("성공!");
    },
  });

  // const diets = useSelector((state) => state.diets);
  // console.log("diets", diets);

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [file, setFile] = useState();

  // const formData = new FormData();

  // Object.entries(data).forEach(([key, value]) => {
  //   if (value.type === "file") {
  //     // value: {type: string, value: File}
  //     formData.append(key, value.value);
  //   }
  // });

  const handleSubmitButtonClick = (e) => {
    e.preventDefault();

    if (!writer || !title || !contents) {
      return alert("작성자, 제목, 내용을 입력하세요.");
    }

    const newDiet = {
      writer,
      title,
      contents,
      id: shortid.generate(),
      file,
    };

    mutation.mutate(newDiet);

    navigate("/list");
  };

  // const handleWriteButtonClick = () => {
  //   fileInput.current.click();
  // };

  const handleChange = (e) => {
    fileInput.current.click();
    console.log(e.target.files[0]);
  };

  return (
    <div>
      <form onSubmit={handleSubmitButtonClick}>
        <p>작성자</p>
        <input
          type="text"
          value={writer}
          onChange={(e) => {
            setWriter(e.target.value);
          }}
        />
        <p>제목</p>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <p>내용</p>
        <input
          type="text"
          value={contents}
          onChange={(e) => {
            setContents(e.target.value);
          }}
        />
        <input
          type="file"
          accept="image/png, image/jpeg"
          ref={fileInput}
          onChange={handleChange}
          value={file}
          onChangeCapture={(e) => {
            setFile(e.target.value);
          }}
        />
        <button type="submit">작성하기</button>
      </form>
    </div>
  );
}

export default PostWrite;
