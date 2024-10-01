import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
function TodoCard({ title, body, id, deleteId, toggleUpdateCard ,updateId,toBeUpdate }) {
  // const [toggle, setToggle] = useState(true)
  return (
    <div className="relative px-5 py-3 flex-shrink-0 w-60 h-40 bg-white rounded-[20px] text-gray-800 overflow-hidden border-[1px] border-gray-300 shadow-xl hover:scale-[1.02] ease-linear duration-200 z-20">
      <h1 className="w-full flex justify-center font-semibold text-xl">
        title:{title}
      </h1>
      <p className="text-sm mt-2 leading-tight break-words">desc:{body}</p>

      <footer className="absolute bottom-0 left-0 w-full flex justify-around py-2">
        <FaEdit
          className="w-6 h-6 text-gray-500 hover:text-gray-600 cursor-pointer"
          onClick={() => {
           toBeUpdate(updateId)
            toggleUpdateCard(false)

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
