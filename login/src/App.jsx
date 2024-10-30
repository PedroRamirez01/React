import React from "react";
import { Login } from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProtectedRouter } from "./components/ProtectedRouter";
import { Admin } from "./components/Admin";
import { Vendedor } from "./components/Vendedor";
import { Cajero } from "./components/Cajero";

export function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRouter>
                <Admin />
              </ProtectedRouter>
            }
          ></Route>
          <Route
            path="/vendedor"
            element={
              <ProtectedRouter>
                <Vendedor />
              </ProtectedRouter>
            }
          ></Route>
          <Route
            path="/cajero"
            element={
              <ProtectedRouter>
                <Cajero />
              </ProtectedRouter>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}
