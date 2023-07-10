import React from "react";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import DietList from "../components/DietList/DietList";

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
