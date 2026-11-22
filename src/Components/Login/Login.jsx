import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("jwtToken");
    if (token !== undefined) {
      navigate("/");
    }
  }, [navigate]);

  const onSubmitUserDetails = async (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      setShowError(true);
      setErrorMsg("Please enter both username and password");
      return;
    }

    const api = "https://apis.ccbp.in/login";
    const userDetails = {
      username: username,
      password: password,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };

    try {
      const response = await fetch(api, options);
      const data = await response.json();

      if (response.ok === true) {
        setShowError(false);
        Cookies.set("jwtToken", data.jwt_token, { expires: 30 });
        navigate("/");
      } else {
        setShowError(true);
        setErrorMsg(data.error_msg);
      }
    } catch (err) {
      console.log("login error:", err);
      setShowError(true);
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-slate-900 px-4">
      <div className="bg-slate-800 p-8 rounded-xl shadow-lg w-full max-w-md border border-slate-700">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="website logo" className="h-12 object-contain" />
        </div>

        <form onSubmit={onSubmitUserDetails}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2"
            >
              USERNAME
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full bg-slate-900 text-white border border-slate-700 rounded-md px-4 py-2.5 outline-none focus:border-indigo-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2"
            >
              PASSWORD
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full bg-slate-900 text-white border border-slate-700 rounded-md px-4 py-2.5 outline-none focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-md transition"
          >
            Login
          </button>

          {showError && (
            <p className="text-red-500 text-sm mt-3 text-center">
              *{errorMsg}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
