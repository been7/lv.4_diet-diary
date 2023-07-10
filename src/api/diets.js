import axios from "axios";

const getDiets = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/diets`);
  return response.data;
};

const addDiet = async (newDiet) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/diets`, newDiet);
};

const delDiet = async (id) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/diets/${id}`);
};

const fixDiet = async (newDiet) => {
  await axios.patch(
    `${process.env.REACT_APP_SERVER_URL}/diets/${newDiet.id}`,
    newDiet
  );
};

export { getDiets, addDiet, delDiet, fixDiet };
