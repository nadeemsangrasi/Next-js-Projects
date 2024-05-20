"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "@/features/todo/todoSlice";
import { removeTodo } from "@/features/todo/todoSlice";
import { Todo } from "@/type/type";
import { CiEdit } from "react-icons/ci";

const Todos = () => {
  let dispatch = useDispatch();
  let todos: Todo[] = useSelector((state: { todos: Todo[] }) => state.todos);
  let [input, setInput] = useState<string>("");
  const handleRemove = (id: string): void => {
    dispatch(removeTodo(id));
  };
  const addTodoHandler = (e: any): void => {
    e.preventDefault();
    if (input.length !== 0) {
      dispatch(addTodo(input));
      setInput("");
    } else {
      alert("Please write todo first");
    }
  };
  const handleEdit = (id: string, text: string): void => {
    setInput(text);
    handleRemove(id);
  };
  return (
    <div>
      <div>
        <form
          onSubmit={addTodoHandler}
          className="space-x-3 mt-12 w-full text-center "
        >
          <input
            type="text"
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-full "
            placeholder="Enter a Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-4"
          >
            Add Todo
          </button>
        </form>
      </div>
      <div>
        <div>
          <h1 className="text-2xl text-semibold">Todos</h1>
        </div>
        <ul className="list-none">
          {todos &&
            todos.map((todo: { id: string; text: string }) => (
              <li
                className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded gap-4"
                key={todo.id}
              >
                <div className="text-white break-words overflow-hidden">
                  {todo.text}
                </div>
                <div className="flex md:flex-row  flex-col gap-5">
                  <button
                    onClick={() => handleEdit(todo.id, todo.text)}
                    className="text-white"
                  >
                    <CiEdit className="text-3xl" />
                  </button>
                  <button
                    onClick={() => handleRemove(todo.id)}
                    className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
