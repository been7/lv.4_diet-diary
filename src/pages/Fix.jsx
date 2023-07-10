import React from "react";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import PostFix from "../components/PostFix/PostFix";

function Fix() {
  return (
    <>
      <Header />
      <Layout>
        <PostFix />
      </Layout>
    </>
  );
}

export default Fix;
