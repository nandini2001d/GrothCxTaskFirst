import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginfuct = async (e) => {
    e.preventDefault();

    try {
      const login = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("email", login.user.email);
      navigate("/");
      alert("singIn Sucessfully");
    } catch (error) {
      alert("Email Id Or password Wrong");
    }
  };
  
  const povider = new GoogleAuthProvider();
  const singinwithgoogleaccout = async () => {
    await signInWithPopup(auth, povider)
      .then((result) => {
        localStorage.setItem("email", result.user.email);
        navigate("/");
      })
      .catch((errer) => {
        alert("somthing wets wrong");
      });
  };

  return (
    <>
      <div className="container-fluid main-container">
        <div className="row">
          <div className="col-lg-6 col-md-12 text-center main-col">
            <div
              className="card main-card"
              style={{
                position: "absolute",
                top: "20%",
                left: "20%",
                transform: "translet(-20%,-20%)",
                border: "none",
                width: "30%",
              }}
            >
              <div
                className="card-header text-center text-black bg-white main-header"
                style={{ border: "none" }}
              >
                <h3>Sign In</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti assumenda magnam reprehenderit ab temporibus est,
                  perspiciatis vitae vero mollitia excepturi
                </p>
              </div>
              <div className="card-body">
                <form onSubmit={loginfuct}>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Enter Your Email Id"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Enter Your Password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Sign In
                  </button>
                  <br />
                  <h5 className="mb-1">Or</h5>
                </form>
                <button
                  className="btn btn-primary btn-md main-btn"
                  onClick={singinwithgoogleaccout}
                >
                  <img
                    src="/img/google.jpg"
                    style={{
                      width: "30px",
                      height: "25px",
                      marginRight: "15px",
                    }}
                  />{" "}
                  Sign in using google
                </button>
                <br />
                <br />

                <h6>
                  Do not have account ? <Link to="/singup">Sign Up</Link>
                </h6>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12  text-right">
            <img src="/img/bg.png" style={{ width: "100%", height: "100vh" }} />
          </div>
        </div>
      </div>
    </>
  );
}
