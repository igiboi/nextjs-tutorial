import React from "react";
import TodosList from "./TodosList";

function Todos() {
  return (
    <div className="bg-black">
      {/*  @ts-ignore*/}
      <TodosList />
    </div>
  );
}

export default Todos;
