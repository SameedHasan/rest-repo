"use client";
import React, { useState } from "react";

type Props = {};

export default function page({}: Props) {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  return (
    <div className="p-10 flex flex-col">
      <form className="p-10 flex flex-col" onSubmit={addTodo}>
        <label>ToDo:</label>
        <input
          value={newTodo}
          type="text"
          id="todo"
          name="todo"
          placeholder="enter data"
          onChange={(e) => setNewTodo(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        <h1>Todo List</h1>
        <ul>
          {todos.map((todo, index) => {
            return <li key={index}>{todo}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
