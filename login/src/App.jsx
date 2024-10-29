import React from "react";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProtectedRouter } from "./components/ProtectedRouter";

export function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <ProtectedRouter>
                <Home />
              </ProtectedRouter>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}
