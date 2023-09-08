import React from "react";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import Home from "../components/Main/Home";

function Main() {
  return (
    <>
      <title>식단일기 | Lv.4</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Web site created using create-react-app"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://lv-4-diet-diary.vercel.app/" />
      <meta property="og:title" content="Lv.4" />
      <meta
        property="og:image"
        content="https://qqmpajgfevwczsrkmsyu.supabase.co/storage/v1/object/public/countryImgs/Hong%20Kong.jpg?t=2023-09-08T12%3A18%3A05.237Z"
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
