import React from "react";
import DietList from "../components/DietList/DietList";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";

function List() {
  return (
    <>
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://lv-4-diet-diary.vercel.app/" />
      <meta property="og:title" content="Lv.4 목록이다" />
      <meta
        property="og:image"
        content="https://pbs.twimg.com/media/FIbhNioakAAc_V0?format=jpg&name=large"
      />
      <meta property="og:description" content="여긴 목록" />
      <meta property="og:site_name" content="Lv.4 과제" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <Header />
      <Layout>
        <DietList />
      </Layout>
    </>
  );
}

export default List;
