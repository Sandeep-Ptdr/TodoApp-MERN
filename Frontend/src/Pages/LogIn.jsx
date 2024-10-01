import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedin);
  const dispatch = useDispatch();
  console.log(isLoggedIn, "isloggedinnnn");
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:3000/api/v1/login", input)
      .then((res) => {
        sessionStorage.setItem("id", res.data.others._id);
        dispatch(login());
        navigate('/')
      });

    setInput({
      email: "",
      password: "",
    });
    //  console.log(input,"login Input")
  };

  return (
    <>
      <div className="main-container  bg-white  justify-center   items-center  flex h-[60vh] sm:h-screen w-full  rounded-lg ">
        <div className="flex flex-col self-center bg-white justify-center items-center h-[70%] w-full sm:w-1/3 sm:h-1/2 rounded-lg shadow-lg">
          <form
            onSubmit={handleLogin}
            className="flex flex-col w-full p-2 sm:w-3/5 gap-3"
          >
            <div className="flex flex-col">
              <label htmlFor="email">E-mail</label>

              <input
                className="border-2 outline-none border-black rounded-full px-2 py-1"
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
              <label htmlFor="password">Password</label>

              <input
                className="border-2 outline-none border-black rounded-full px-2 py-1"
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
              className="bg-indigo-500 text-white mt-2 rounded-full py-1 text-base font-semibold hover:bg-indigo-600"
            >
              Login
            </button>

            <div className="flex gap-1 items-center w-full justify-center mt-1">
              <p>Don't have an Account?</p>
              <Link to="/register">
                <span className="text-blue-700 underline mt-2">
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
