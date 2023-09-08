import React from "react";
import DietList from "../components/DietList/DietList";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";

function List() {
  return (
    <>
      <Header />
      <Layout>
        <DietList />
      </Layout>
    </>
  );
}

export default List;
