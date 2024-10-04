import React from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function TodoCard({
  title,
  body,
  id,
  deleteId,
  toggleUpdateCard,
  updateId,
  toBeUpdate,
}) {
  return (
    <div className="relative px-5 py-3  w-60 h-40 bg-indigo-100  text-gray-800 overflow-hidden rounded-lg border-gray-300 shadow-xl hover:scale-[1.02] ease-linear duration-200 z-20 text-center">
    
      <h1 className="font-semibold text-xl text-indigo-500">
        {title}
      </h1>
      <p className="text-lg mt-2 text-gray-800 leading-tight break-words">{body}</p>

      <footer className="absolute bottom-0 left-0 w-full flex justify-around py-2">
        <FaEdit
          className="w-6 h-6 text-gray-500 hover:text-gray-600 cursor-pointer"
          onClick={() => {
            toBeUpdate(updateId);
            toggleUpdateCard(false);
          }}
        />
        <MdDelete
          className="w-6 h-6 text-gray-500 hover:text-gray-600 cursor-pointer"
          onClick={() => deleteId(id)}
        />
      </footer>
    </div>
     
  );
}

export default TodoCard;
