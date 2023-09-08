import React from "react";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
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
