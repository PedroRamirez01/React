import React from "react";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProtectedRouter } from "./components/ProtectedRouter";
import { HomeProfesor } from "./components/HomeProfesor";

export function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/homealumno"
            element={
              <ProtectedRouter>
                <Home />
              </ProtectedRouter>
            }
          ></Route>
          <Route
            path="/homeprofesor"
            element={
              <ProtectedRouter>
                <HomeProfesor />
              </ProtectedRouter>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}
