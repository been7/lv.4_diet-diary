import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Write from "../pages/Write";
import List from "../pages/List";
import Fix from "../pages/Fix";
import Detail from "../pages/Detail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/write" element={<Write />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/fix/:id" element={<Fix />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
