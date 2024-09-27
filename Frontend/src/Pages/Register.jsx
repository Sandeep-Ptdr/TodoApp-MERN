import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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
      .post("http://localhost:3000/api/v1/register", input)
      .then((res) => console.log(res, "api response"));

    // console.log(input, "userdata");
    setInput({
      username: "",
      email: "",
      password: "",
    });

    navigate("/login")
  };

  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="  bg-white justify-center items-center flex flex-col w-full h-full sm:h-1/2 sm:w-1/3  rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="flex flex-col w-10/12">
            <label htmlFor="username">Name</label>
            <input
              name="username"
              value={input.username}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              className="border-2 outline-none border-black rounded-full px-2 py-1"
              id="name"
              type="text"
              required
            />

            <label htmlFor="email">E-mail</label>
            <input
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              className="border-2 outline-none border-black rounded-full px-2 py-1"
              id="email"
              type="email"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              className="border-2 outline-none border-black rounded-full px-2 py-1"
              id="password"
              type="password"
              required
            />

            <button
              type="submit"
              className="bg-indigo-500 text-white mt-2 rounded-full py-1 text-base font-semibold hover:bg-indigo-600"
            >
              Register
            </button>
            <div className="flex gap-1 items-center w-full justify-center">
              <p>Already have an Account?</p>
              <Link to="/login">
                <span className="text-blue-700 underline mt-2">Login here</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
