import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import Home from "../components/Main/Home";

function Main() {
  return (
    <>
      <Helmet>
        <title>식단일기 | Lv.4</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <meta name="type" content="website" />
        <meta name="url" content="https://lv-4-diet-diary.vercel.app/" />
        <meta name="title" content="Lv.4" />
        <meta
          name="image"
          content="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80"
        />
        <meta name="og:description" content="테스트용 설명..." />
        <meta name="og:site_name" content="Lv.4 과제" />
        <meta name="og:locale" content="en_US" />
        <meta name="og:image:width" content="1200" />
        <meta name="og:image:height" content="630" />
      </Helmet>
      <Header />
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default Main;
