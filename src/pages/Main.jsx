import React from "react";
import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import Home from "../components/Main/Home";

function Main() {
  return (
    <>
      <Header />
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default Main;
