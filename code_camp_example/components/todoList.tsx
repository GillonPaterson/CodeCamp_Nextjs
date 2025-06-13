'use client'

import { useState } from 'react'
import TodoItem from './todoItem'

type Todo = {
  id: number
  text: string
  completed: boolean
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (!input.trim()) return
    const newTodo: Todo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    }
    setTodos([newTodo, ...todos])
    setInput('')
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <div className="flex mb-4 gap-2">
        <input
          className="border px-3 py-2 flex-1 rounded"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => toggleTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  )
}
