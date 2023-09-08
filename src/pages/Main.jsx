import React from "react";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import Home from "../components/Main/Home";

function Main() {
  return (
    <>
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://lv-4-diet-diary.vercel.app/" />
      <meta property="og:title" content="Lv.4" />
      <meta
        property="og:image"
        content="https://pbs.twimg.com/media/FIbhNioakAAc_V0?format=jpg&name=large"
      />
      <meta property="og:description" content="테스트용 설명..." />
      <meta property="og:site_name" content="Lv.4 과제" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <Header />
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default Main;
