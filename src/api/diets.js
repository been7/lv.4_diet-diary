import axios from "axios";

// 조회
const getDiets = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/diets`);
  return response.data;
};

// 추가
const addDiet = async (newDiet) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/diets`, newDiet);
};

// 삭제
const delDiet = async (id) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/diets/${id}`);
};

// 수정
const fixDiet = async (newDiet) => {
  await axios.patch(
    `${process.env.REACT_APP_SERVER_URL}/diets/${newDiet.id}`,
    newDiet
  );
};

export { getDiets, addDiet, delDiet, fixDiet };
