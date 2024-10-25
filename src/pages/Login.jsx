import React, { useState } from "react";
import { useAuth } from "../context/authContext/index.jsx";
import { handleLoginUser } from "../firebase/auth";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const navigate = useNavigate();
  const {isUserLoggedIn} = useAuth();
  console.log(isUserLoggedIn)
  const [isLoading, setIsLoading] = useState(false);
  const [loginCreds, setLoginCreds] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async () => {
    try {
      if (!isUserLoggedIn) {
        setIsLoading(true);
        const {email,password}= loginCreds
        await handleLoginUser(email,password);
        navigate("/notes");
      }
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div className="h-full">
      <div className="grid grid-cols-2 justify-center h-full">
        <div className="h-full">1</div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="bg-slate-400 border rounded-lg min-w-[300px] max-w-[300px] p-4">
            <div className="text-center">
              <span>Login</span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>{" "}
              <input
                value={loginCreds.email}
                onChange={(e) =>
                  setLoginCreds((oldVal) => ({
                    ...oldVal,
                    email: e.target.value,
                  }))
                }
                className="p-2 rounded-md"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col gap-2 mb-2">
              <label htmlFor="Password">Password</label>{" "}
              <input
                value={loginCreds.password}
                onChange={(e) =>
                  setLoginCreds((oldVal) => ({
                    ...oldVal,
                    password: e.target.value,
                  }))
                }
                className="p-2 rounded-md"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="text-center">
              <button
                className="py-1 px-2 bg-white rounded-md"
                onClick={handleLogin}
              >
                {isLoading ? "Loading" : "Login"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
