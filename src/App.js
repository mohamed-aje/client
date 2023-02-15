import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Recipes from "./components/Recipes";
import {
  Navigate,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/recipes"
        element={
          <PrivateRoute>
            <Recipes />{" "}
          </PrivateRoute>
        }
      />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
