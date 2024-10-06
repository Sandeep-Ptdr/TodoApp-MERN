import React from "react";
import { RiTodoFill } from "react-icons/ri";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/AuthSlice";
import { toast, ToastContainer } from "react-toastify";
const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedin);

  return (
    <>
      <ToastContainer />
      <nav className="bg-gray-200 shadow shadow-gray-300 w-100 h-1/5 px-8 md:px-auto">
        <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
          <Link to="/">
            <div className="text-indigo-500 md:order-1 flex items-center">
              <RiTodoFill style={{ width: 30, height: 30 }} />
               <h1 className="text-3xl font-bold">ListiFy</h1>
            </div>
          </Link>
          <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
            <ul className="flex font-semibold justify-between">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : "text-gray-500"
                }
              >
                <li className="md:px-4 md:py-2">Dashboard</li>
              </NavLink>
              <NavLink
                to="/todo"
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : "text-gray-500"
                }
              >
                <li className="md:px-4 md:py-2">Todos</li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : "text-gray-500"
                }
                to="/about"
              >
                <li className="md:px-4 md:py-2 hover:text-indigo-400">
                  About Us
                </li>{" "}
              </NavLink>
              {/* <li className="md:px-4 md:py-2 hover:text-indigo-400">
                <a href="#">Contact</a>
              </li> */}
            </ul>
          </div>
          {isLoggedIn ? (
            <div className="order-2 md:order-3 flex gap-2">
              <div>
                <NavLink to="/">
                  <button
                    onClick={() => {
                      toast.success("logged out");
                      dispatch(logout());
                      sessionStorage.removeItem("id");
                    }}
                    className="px-4 py-2  bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2 transition duration-300 ease-in-out"
                  >
                    <span>Logout</span>
                  </button>
                </NavLink>
              </div>
            </div>
          ) : (
            <div className="order-2 md:order-3 flex gap-2">
              <div>
                <NavLink to="/login">
                  <button className="px-4 py-2  bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2 transition duration-300 ease-in-out">
                    <span>SignIn</span>
                  </button>
                </NavLink>
              </div>
              <div>
                <NavLink to="/register">
                  <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                    <span>SignUp</span>
                  </button>
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
