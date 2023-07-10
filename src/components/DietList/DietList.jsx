import React from "react";
import { useQuery } from "react-query";
import { getDiets } from "../../api/diets";
import { useNavigate } from "react-router-dom";

function DietList() {
  const { isLoading, isError, data } = useQuery("diets", getDiets);
  console.log("data", data);

  const navigate = useNavigate();

  if (isLoading) {
    return <p>로딩중입니다.....!</p>;
  }

  if (isError) {
    return <p>오류가 발생했습니다...!</p>;
  }

  return (
    <div>
      {data &&
        data.map((item) => {
          return (
            <div key={item.id}>
              <h2 onClick={() => navigate(`/detail/${item.id}`)}>
                {item.title}
              </h2>
              <p>{item.writer}</p>
              <p>{item.file}</p>
            </div>
          );
        })}
    </div>
  );
}

export default DietList;
