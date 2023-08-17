import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Company from "./pages/Company";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/*
    どのページにもAppを表示するためにRoutesと兄弟要素に
    TODO : App コンポーネントが実質サイドバーなのでリファクタ候補　App → SideNavigation 等 
    */}
    <App />
    <Routes>

      {/* {domain}/ 遷移後Homeを表示 */}
      <Route path="/" element={<Home />} />
      <Route path="/pages/Home" element={<Home />} />
      <Route path="/pages/Company" element={<Company />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
