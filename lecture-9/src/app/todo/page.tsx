"use client";
import React, { useState } from "react";

type Props = {};

export default function Page({}: Props) {
  const [todos, setTodos] = useState<
    { id: number; title: string; description: string }[]
  >([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title && description) {
      setTodos([...todos, { id: todos.length + 1, title, description }]);
      setTitle(""); // Clear the title input after submission
      setDescription(""); // Clear the description input after submission
    }
  };
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => id !== todo.id));
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-4 py-8 lg:px-8 bg-gray-100">
      <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-indigo-600">
        Todo App
      </h2>

      {/* Container for Form and Todo List */}
      <div className="mt-10 flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-8 justify-center ">
        {/* Left Column: Form (30% width, fixed height on larger screens, full width on mobile) */}
        <div className=" mt-10 w-full md:w-[30%] bg-white shadow-lg rounded-lg p-6 h-auto md:h-[350px] flex flex-col justify-between">
          <h3 className="text-center text-xl font-semibold leading-6 text-indigo-600 mb-4">
            Add New Todo
          </h3>
          <form onSubmit={addTodo} className="space-y-6 flex-grow">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Title
              </label>
              <div className="mt-2">
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2">
                <input
                  id="description"
                  name="description"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add Todo
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Todo List (70% width on larger screens, full width on mobile) */}
        <div className="w-full md:w-[70%] overflow-auto">
          <h3 className="text-center text-xl font-semibold leading-6 text-indigo-600 mb-4">
            Todo List
          </h3>
          <div className="max-h-[80vh] overflow-y-auto pr-5">
            <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
              {todos.length === 0 ? (
                <p className="col-span-1 md:col-span-3 text-center text-gray-500">
                  No todos yet
                </p>
              ) : (
                todos.map((todo, index) => (
                  <li
                    key={index}
                    className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between transform transition-transform duration-200"
                  >
                    <div>
                      <h4 className="font-bold text-lg text-indigo-600 mb-2">
                        {todo.title}
                      </h4>
                      <p className="text-gray-700">{todo.description}</p>
                    </div>
                    <button
                      onClick={() => deleteTodo(index)}
                      className="mt-4 inline-flex items-center justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      Delete
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
