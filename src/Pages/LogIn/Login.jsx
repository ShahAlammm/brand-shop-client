import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { AuthContext } from "../../Hook/Provider/AuthProvider";




const Login = () => {

const {googleSignIn, signIn} = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Google
  const handleGoogle = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      Swal("Good job!", "Log In successfully!", "success");
      navigate("/");
    });
  };

  // Manual
  const handleLogIn = (e) => {
    e.preventDefault();
    if (email && password) {
      signIn(email, password)
        .then((result) => {
          console.log(result.user);
          setEmail("");
          setPassword("");
          Swal("Good job!", "Log In successfully!", "success");
          navigate("/");
        })
        .catch((err) => {
          setError(err.massage);
          Swal("Error!", "Log In failed! Provide valid information", "error");
        });
    }
  };
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold font-Poppins">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 bg-base-100 lg:w-96 md:w-96 max-w-sm shadow-cyan-500/50 shadow-2xl font-bold">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <p>{error}</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="email"
                  className="input input-bordered shadow-lg"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="password"
                  className="input input-bordered shadow-lg"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  onClick={handleLogIn}
                  className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-lg shadow-blue-600/50 text-white"
                >
                  Login
                </button>
              </div>
              <button onClick={handleGoogle} className="btn  mt-4 flex shadow-lg shadow-blue-600/50">
               <img className="h-8 w-8" src="https://i.ibb.co/Y7DnLZZ/Logo-Search-Google-on-transparent-background-PNG.png" alt="" /> Google
              </button>
              <p className="text-end mt-4">
                If new please
                <Link to="/register" className="text-blue-600 underline ml-1">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
