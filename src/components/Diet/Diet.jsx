import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { delDiet, fixDiet, getDiets } from "../../api/diets";
import { useQuery, useMutation, queryClient } from "react-query";

function Diet() {
  const params = useParams();
  const { isLoading, isError, data } = useQuery("diets", getDiets);
  const navigate = useNavigate();

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
    window.confirm("삭제하시겠습니까?");
    deleteMutation.mutate(filteredDiet.id);
    navigate("/list");
  };

  return (
    <div>
      <div>
        <p>{filteredDiet.writer}</p>
        <p>{filteredDiet.title}</p>
        <p>{filteredDiet.contents}</p>
      </div>
      <div>
        <button onClick={() => navigate(`/fix/${filteredDiet.id}`)}>
          수정
        </button>
        <button onClick={handleDeleteButtonClick}>삭제</button>
        <button onClick={() => navigate("/list")}>목록으로</button>
      </div>
    </div>
  );
}

export default Diet;
