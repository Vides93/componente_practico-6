import React from "react";
import { TodoItem } from "./TodoItem";

export function TodoList({ lista }) {
  return (
    <ul>
      {lista.map((lista) => (
        <TodoItem key={lista.id} lista={lista} />
      ))}
    </ul>
  );
}
