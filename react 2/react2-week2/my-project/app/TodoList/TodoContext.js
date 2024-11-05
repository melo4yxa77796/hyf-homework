"use client";
import React, { createContext, useReducer, useContext } from "react";

const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const REMOVE_TODO = "REMOVE_TODO";

const initialState = [];

const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: Date.now(),
          text: action.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const TodoContext = createContext();

export const useTodos = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (text) => dispatch({ type: ADD_TODO, text });
  const toggleTodo = (id) => dispatch({ type: TOGGLE_TODO, id });
  const removeTodo = (id) => dispatch({ type: REMOVE_TODO, id });

  return (
    <TodoContext.Provider
      value={{ todos: state, addTodo, toggleTodo, removeTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
