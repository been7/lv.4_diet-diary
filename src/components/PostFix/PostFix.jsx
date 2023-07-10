import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { queryClient, useMutation, useQuery } from "react-query";
import { fixDiet } from "../../api/diets";
import { getDiets } from "../../api/diets";
import shortid from "shortid";

function PostFix() {
  const { data } = useQuery("diets", getDiets);
  const params = useParams();
  const filteredDiet = data.find((item) => {
    return item.id == params.id;
  });

  const [writer, setWriter] = useState(filteredDiet.writer);
  const [title, setTitle] = useState(filteredDiet.title);
  const [contents, setContents] = useState(filteredDiet.contents);
  const [file, setFile] = useState();

  const navigate = useNavigate();

  const fileInput = useRef(null);

  const mutation = useMutation(fixDiet, {
    onSuccess: () => {
      queryClient.invalidateQueries("diets");
    },
  });

  const handlePatchButtonClick = (e) => {
    e.preventDefault();

    if (!title || !contents) {
      return alert("작성자, 제목, 내용을 입력하세요.");
    }

    const newDiet = {
      writer,
      title,
      contents,
      file,
      id: filteredDiet.id,
    };

    mutation.mutate(newDiet);

    navigate("/list");
  };

  const handleChange = (e) => {
    fileInput.current.click();
    console.log(e.target.files[0]);
  };

  return (
    <div>
      <form onSubmit={handlePatchButtonClick}>
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
          value={file || ""}
          onChangeCapture={(e) => {
            setFile(e.target.value);
          }}
        />
        <button type="submit">수정하기</button>
      </form>
    </div>
  );
}

export default PostFix;
