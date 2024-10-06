import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(`http://localhost:3000/api/v1/register`, input)
      .then((res) => console.log(res, "api response"));

    setInput({
      username: "",
      email: "",
      password: "",
    });

    toast.success("Account created Successfully.")
   setTimeout(()=> {
    navigate("/login");
   },1000)
  };

  return (
    <>
    <ToastContainer/>
      <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
        <div className="bg-white justify-center items-center flex flex-col w-11/12 h-auto sm:h-auto sm:w-1/3 p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Register
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
            <div className="flex flex-col">
              <label htmlFor="username" className="text-lg text-gray-600 mb-1">
                Name
              </label>
              <input
                name="username"
                value={input.username}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                className="border-2 outline-none border-gray-300 rounded-lg px-4 py-2 text-base focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 transition duration-300 ease-in-out"
                id="username"
                type="text"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg text-gray-600 mb-1">
                E-mail
              </label>
              <input
                name="email"
                value={input.email}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                className="border-2 outline-none border-gray-300 rounded-lg px-4 py-2 text-base focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200  transition duration-300 ease-in-out"
                id="email"
                type="email"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-lg text-gray-600 mb-1">
                Password
              </label>
              <input
                name="password"
                value={input.password}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                className="border-2 outline-none border-gray-300 rounded-lg px-4 py-2 text-base focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 transition duration-300 ease-in-out"
                id="password"
                type="password"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-indigo-500 text-white rounded-lg py-2 text-lg font-semibold hover:bg-indigo-600 transition duration-300 ease-in-out"
            >
              Register
            </button>

            <div className="flex gap-1 items-center w-full justify-center mt-2">
              <p className="text-gray-600">Already have an account?</p>
              <Link to="/login">
                <span className="text-blue-600 underline font-semibold">
                  Login here
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
