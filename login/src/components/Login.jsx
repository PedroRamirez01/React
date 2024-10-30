import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/styles.css";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      if (email.includes("@alumnos.cl")) {
        navigate("/homealumno", { replace: true });
      } else if (email.includes("@profesor.cl")) {
        navigate("/homeprofesor", { replace: true });
      } else {
        navigate("/", { replace: true });
      }

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="d-flex aling-items-center py-4 bg-body-tertiary vh-100">
        <main className="form-signin w-100 m-auto">
          <form onSubmit={handleLogin}>
            <img
              className="mb-4"
              src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
              alt=""
              width="72"
              height="57"
            />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            {error && <div className="alert alert-danger">{error}</div>}
            
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="txt_email"
                name="txt_email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="txt_contrasena"
                name="txt_contrasena"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-check text-start my-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="remember-me"
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">
              Sign in
            </button>
            <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
          </form>
        </main>
      </div>
    </>
  );
}
