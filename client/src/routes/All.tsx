import React from "react";
import { Route, Routes } from "react-router";
import App from "../App";

function All() {
  return (
    <Routes>
      <Route path="/" element={<App />} />{" "}
    </Routes>
  );
}

export default All;
