import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigininIn, setIsSignInin] = useState(false);
  const [erreMag, setErreorMag] = useState(false);

  const loginfuct = async (e) => {
    e.preventDefault();

    try {
      const login = await createUserWithEmailAndPassword(auth, email, password);
      alert("singUp Sucessfully Plz SignIn");
    } catch (error) {
      alert("email id is already registerd");
    }
  };

  return (
    <>
      <div className="container-fluid main-container">
        <div className="row">
          <div className="col-lg-6 text-center col-md-12 main-col">
            <div
              className="card main-card"
              style={{
                position: "absolute",
                top: "25%",
                left: "20%",
                transform: "translet(-25%,-20%)",
                border: "none",
                width: "30%",
              }}
            >
              <div
                className="card-header text-center text-black bg-white"
                style={{ border: "none" }}
              >
                <h3>Sign Up</h3>
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
                    Sign Up
                  </button>
                  <br />
                  <br />
                  <h6>
                    Alredy have account ? <Link to="/signin">Sing In</Link>
                  </h6>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 text-right">
            <img src="/img/bg.png" style={{ width: "100%", height: "100vh" }} />
          </div>
        </div>
      </div>
    </>
  );
}
