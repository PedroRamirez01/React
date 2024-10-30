import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export function Cajero() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="d-flex aling-items-center py-4 bg-body-tertiary vh-100">
        <main className="form-signin w-100 m-auto">
          <img
            className="mb-4"
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Welcome CAJERO</h1>
          <button
            className="w-100 btn btn-lg btn-primary"
            onClick={handleLogout}
          >
            Logout
          </button>
        </main>
      </div>
    </>
  );
}
