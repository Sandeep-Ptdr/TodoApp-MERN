import React, { useEffect, useState } from "react";
import TodoCard from "../Components/TodoCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateTodo from "./UpdateTodo";

function Todos() {
  const [Input, setInput] = useState({ title: "", body: "" });
  const [Todos, setTodos] = useState([]);
  const [updateToggle, setUpdateToggle] = useState(true);//open and close the update card component

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...Todos, Input]);
    setInput({ title: "", body: "" });
    // console.log("todos",Todos)
    toast.success("Task Added !");
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...Input, [name]: value });
  };

  const del = (id) => {
    Todos.splice(id, "1");
    setTodos([...Todos]);
    toast.error("Task Deleted !");
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
  //   useEffect(() => {
  //     console.log("todo",Todos)
  //   }, [Todos])

  return (
    <>
      <ToastContainer />
      <div className="flex justify-center border-[1px] border-gray-300 h-fit p-2 w-full rounded-lg sm:w-[30%] shadow-lg ">
        <form
          className="flex flex-col gap-2 w-full h-full"
          onSubmit={handleSubmit}
        >
          <input
            name="title"
            className="px-3 py-1 outline-none border-b-[1px] border-gray-500"
            type="text"
            placeholder="Title"
            value={Input.title}
            onChange={handleInput}
          />
          <input
            name="body"
            className="px-3 py-1 outline-none border-b-[1px] border-gray-500"
            type="text"
            placeholder="Description"
            value={Input.body}
            onChange={handleInput}
          />
          <button
            className=" mt-2 bg-indigo-500 hover:bg-indigo-600 self-center w-1/2 py-1 text-lg font-medium rounded-lg text-white"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
      <div className="w-full min-h-full grid grid-cols-5 gap-3  mt-5">
        {Todos && Todos.length > 0 ? (
          Todos.map((Todos, index) => (
            <TodoCard
              title={Todos.title}
              body={Todos.body}
              key={index}
              id={index}
              deleteId={del}
              toggleUpdateCard={setFalse}
            />
          ))
        ) : (
          <h1>NO TODOS !</h1>
        )}
      </div>
      <div
        className={`${
          updateToggle ? "hidden" : "none"
        } absolute w-screen h-screen`}
      >
        <UpdateTodo toggleUpdateCard={setTrue} />
      </div>
    </>
  );
}

export default Todos;
