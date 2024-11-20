"use client";
import React, { useState } from 'react';
import { useTodos } from './TodoContext';

const TodoList = () => {
    const { todos, addTodo, removeTodo, toggleTodo } = useTodos();
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            addTodo(newTodo);
            setNewTodo('');
        }
    };

    return (
        <div>
            <h2>Todo List</h2>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new todo"
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                        <button onClick={() => toggleTodo(todo.id)}>
                            {todo.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button onClick={() => removeTodo(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
