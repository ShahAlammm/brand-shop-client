import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Hook/Provider/AuthProvider";

const Register = () => {
  const { signUp } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      )
    ) {
      return setError(
        "Your password should be minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character"
      );
    } else {
      setError("");

      signUp(email, password)
        .then((result) => {
          console.log(result.user);
          setEmail("");
          setPassword("");
          Swal("Good job!", "Register successfully!", "success");
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Register</h1>
          </div>
          <div className="card flex-shrink-0 lg:w-96 md:w-96 max-w-sm shadow-2xl shadow-cyan-500/50 bg-base-100">
            <form className="card-body text-black font-bold">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
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
                <p className="text-red-500">{error}</p>
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
                  onClick={handleRegister}
                  className="btn bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:to-yellow-500 shadow-lg shadow-blue-600/50 text-white"
                >
                  Register
                </button>
              </div>
              <p className="mt-4">
                Already have an account
                <Link to="/login" className="text-blue-600 underline font-bold">
                  LogIn
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
