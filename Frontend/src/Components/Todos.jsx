import React, { useEffect, useState } from "react";
import TodoCard from "../Components/TodoCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateTodo from "./UpdateTodo";
import axios from "axios";
let toUpdateArray = [];

function Todos() {
  const userId = sessionStorage.getItem("id");
  const [Input, setInput] = useState({ title: "", body: "" });
  const [Todos, setTodos] = useState([]);
  const [updateToggle, setUpdateToggle] = useState(true); //open and close the update card component

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userId) {
      await axios
        .post("http://localhost:3000/api/v2/addtask", {
          title: Input.title,
          body: Input.body,
          id: userId,
        })
        .then((res) => console.log(res));

      setInput({ title: "", body: "" });

      toast.success("Task Added !");
    } else {
      setTodos([...Todos, Input]);

      setInput({ title: "", body: "" });
      // console.log("todos",Todos)
      toast.success("Task Added !");
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...Input, [name]: value });
  };

  const del = async (id) => {
    if (userId) {
      await axios.delete(`http://localhost:3000/api/v2/deletetask/${id}`, {
        data: { id: userId },
      });

      Todos.splice(id, "1");
      setTodos([...Todos]);
      toast("Task Deleted !");
    } else {
      Todos.splice(id, "1");
      setTodos([...Todos]);
      toast("Task Deleted !");
    }
  };

  const handleUpdate = (value) => {
    toUpdateArray = Todos[value];
    // console.log(toUpdateArray)
  };

  const setTrue = (value) => {
    setUpdateToggle(value);
    // console.log(updateToggle, "settrue");
  };

  const setFalse = (value) => {
    setUpdateToggle(value);
    // console.log(updateToggle, "setFalse");
  };

  // Monitor changes in Todos and log them when they update
  useEffect(() => {
    const fetchTodos = async () => {
      await axios
        .get(`http://localhost:3000/api/v2/readtask/${userId}`)
        .then((res) => setTodos(res.data.alltodo));
    };
    fetchTodos();
  }, [Todos, handleSubmit]);

  return (
    <>
      <ToastContainer />

      <div className="flex justify-center border-[1px] border-gray-300 h-fit p-2 w-full rounded-lg sm:w-[30%] shadow-lg z-20 ">
        <form
          className="flex flex-col gap-2 w-full h-full"
          onSubmit={handleSubmit}
        >
          <input
            name="title"
            className="px-3 py-1 outline-none border-b-[1.5px] border-gray-500   focus:border-indigo-500 bg-transparent"
            type="text"
            required
            placeholder="Title"
            value={Input.title}
            onChange={handleInput}
          />
          <input
            name="body"
            required
            className="px-3 py-1 outline-none border-b-[1.5px] border-gray-500 focus:border-indigo-500 bg-transparent"
            type="text"
            placeholder="Description"
            value={Input.body}
            onChange={handleInput}
          />
          <button
            className=" mt-2 bg-indigo-500 hover:bg-indigo-600 self-center w-1/2 py-1 text-lg font-medium rounded-lg text-white transition duration-300 ease-in-out"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
      <div className="w-full min-h-full flex flex-col items-center sm:grid sm:grid-cols-4 gap-3  mt-5">
        {Todos && Todos.length > 0 ? (
          Todos.map((Todos, index) => (
            <TodoCard
              title={Todos.title}
              body={Todos.body}
              key={index}
              id={Todos._id}
              deleteId={del}
              updateId={index}
              toBeUpdate={handleUpdate}
              toggleUpdateCard={setFalse}
            />
          ))
        ) : (
          <h1 className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] sm:text-[70px] text-[30px] font-bold text-zinc-500  animate-pulse">
            No Todos..
          </h1>
        )}
      </div>
      <div
        className={`${
          updateToggle ? "hidden" : "none"
        } absolute w-screen h-screen`}
      >
        <UpdateTodo toggleUpdateCard={setTrue} updateArray={toUpdateArray} />
      </div>
    </>
  );
}

export default Todos;
