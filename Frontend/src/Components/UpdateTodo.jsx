import React, { useState } from "react";

function UpdateTodo({toggleUpdateCard}) {
  
  return (
    <> 
    <div className={`absolute w-screen h-screen backdrop-blur-3xl`}></div>
    <div className={`absolute bg-white top-[20%]  left-[50%] -translate-x-[50%]   flex flex-col justify-center border-[1px] border-gray-300 h-fit p-2 w-full rounded-lg sm:w-[50%] sm:h-[60vh] shadow-lg   `}>
                
        <h1 className="text-center text-lg font-semibold">Update Your Todo !</h1>
      <form
        className="flex flex-col gap-2 w-full h-full"
        
      >
        <input
          name="title"
          className="px-3 py-1 outline-none border-b-[1px] border-gray-500"
          type="text"
          placeholder="Title"
        />
        <input
          name="body"
          className="px-3 py-1 outline-none border-b-[1px] border-gray-500"
          type="text"
          placeholder="Description"
        />
        <button
          className=" mt-2 bg-indigo-500 hover:bg-indigo-600 self-center w-1/2 py-1 text-lg font-medium rounded-lg text-white"
          type="submit"
        >
          Update
        </button>
       
       
      </form>
      <button
      onClick={() => toggleUpdateCard(true)}
      >close</button>
      
    </div>
    </>
  );
}

export default UpdateTodo;
