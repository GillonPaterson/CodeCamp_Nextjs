type Todo = {
  id: number
  text: string
  completed: boolean
}

type Props = {
  todo: Todo
  onToggle: () => void
  onDelete: () => void
}

export default function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <li className="flex items-center justify-between p-2 bg-white border rounded">
      <div
        className={`flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''}`}
        onClick={onToggle}
      >
        {todo.text}
      </div>
      <button
        className="ml-4 text-red-500 hover:text-red-700"
        onClick={onDelete}
      >
        ✕
      </button>
    </li>
  )
}
