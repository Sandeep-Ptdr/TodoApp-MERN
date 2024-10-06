import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { backendUrl } from "../assets/config";
 
function LogIn() {
  const navigate = useNavigate();
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedin);
  const dispatch = useDispatch();
  // console.log(isLoggedIn, "isloggedinnnn");
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    await axios
      .post(`${backendUrl}/api/v1/login`, input)
      .then((res) => {
        if (
          res.data.message === "Incorrect Email!" ||
          res.data.message === "Incorrect Password!"
        ) {
          toast.error(`${res.data.message}`);
        } else {
          sessionStorage.setItem("id", res.data.others._id);
           
          dispatch(login());

          toast.success("Login Success");
         
          
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      });

    setInput({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="main-container bg-gray-100 flex justify-center items-center h-screen w-full">
        <div className="flex flex-col self-center bg-white justify-center items-center h-auto w-11/12 sm:w-1/3 p-8 rounded-lg shadow-lg space-y-6">
          <h1 className="text-2xl font-semibold text-gray-800">Log In</h1>
          <form onSubmit={handleLogin} className="flex flex-col w-full gap-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg text-gray-600 mb-1">
                E-mail
              </label>
              <input
                className="border-2 outline-none border-gray-300 rounded-lg px-4 py-2 text-base focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 transition duration-300 ease-in-out"
                id="email"
                type="email"
                required
                name="email"
                value={input.email}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-lg text-gray-600 mb-1">
                Password
              </label>
              <input
                className="border-2 outline-none border-gray-300 rounded-lg px-4 py-2 text-base focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 transition duration-300 ease-in-out"
                id="password"
                type="password"
                required
                name="password"
                value={input.password}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="bg-indigo-500 text-white rounded-lg py-2 text-lg font-semibold hover:bg-indigo-600 transition duration-300 ease-in-out"
            >
              Log In
            </button>

            <div className="flex gap-1 items-center w-full justify-center mt-2">
              <p className="text-gray-600">Don't have an account?</p>
              <Link to="/register">
                <span className="text-blue-600 underline font-semibold">
                  Register here
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LogIn;
