import React from "react";
import { Helmet } from "react-helmet-async";
import DietList from "../components/DietList/DietList";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";

function List() {
  return (
    <>
      <Helmet>
        <meta name="type" content="website" />
        <meta name="url" content="https://lv-4-diet-diary.vercel.app/" />
        <meta name="title" content="Lv.4 목록이다" />
        <meta
          name="image"
          content="https://pbs.twimg.com/media/FIbhNioakAAc_V0?format=jpg&name=large"
        />
        <meta name="description" content="여긴 목록" />
        <meta name="site_name" content="Lv.4 과제" />
        <meta name="locale" content="en_US" />
        <meta name="image:width" content="1200" />
        <meta name="image:height" content="630" />
      </Helmet>
      <Header />
      <Layout>
        <DietList />
      </Layout>
    </>
  );
}

export default List;
