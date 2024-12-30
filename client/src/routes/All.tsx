import React from "react";
import { Route, Routes } from "react-router";
import App from "../Layout";
import UserPage from "./UserPage";
import Layout from "../Layout";
import HomePage from "./Home";

function All() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/:username" element={<UserPage />} />
      </Route>
    </Routes>
  );
}

export default All;
