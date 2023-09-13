import React from "react";
import { Helmet } from "react-helmet-async";
import DietList from "../components/DietList/DietList";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";

function List() {
  return (
    <>
      <Helmet>
        <title>로그인</title>
        <meta property="type" content="website" />
        <meta property="url" content="https://lv-4-diet-diary.vercel.app/" />
        <meta property="title" content="Lv.4 목록이다" />
        <meta
          property="image"
          content="https://pbs.twimg.com/media/FIbhNioakAAc_V0?format=jpg&name=large"
        />
        <meta property="description" content="여긴 목록" />
        <meta property="site_name" content="Lv.4 과제" />
        <meta property="locale" content="en_US" />
        <meta property="image:width" content="1200" />
        <meta property="image:height" content="630" />
      </Helmet>
      <Header />
      <Layout>
        <DietList />
      </Layout>
    </>
  );
}

export default List;
