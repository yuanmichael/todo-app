
import Link from "next/link";
import { TodoItem } from "./components/TodoItem";

const todos = [
  { id: "1", title: "learn React", complete: false },
  { id: "2", title: "learn Next.js", complete: false },
  { id: "3", title: "learn Postgres", complete: false },
  { id: "4", title: "crypto stuff", complete: false },
];

export default function Homepage() {
  // PrismaClient.todo.create({ data: { title: "test", complete: false } })

  return (
  <>
    <header className="flex justify-between items-center mb-4">
      <h1 className="test-2xl">To-do list:</h1>
      <Link 
        className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        href="/new">New
      </Link>
    </header>
    <ul className="pl-4">
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
        
        // <li key={todo}>{todo}</li>
      )
      )}
    </ul>
  </>
  )
}