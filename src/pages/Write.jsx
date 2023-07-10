import React from "react";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import PostWrite from "../components/PostWrite/PostWrite";

function Write() {
  return (
    <>
      <Header />
      <Layout>
        <PostWrite />
      </Layout>
    </>
  );
}

export default Write;
