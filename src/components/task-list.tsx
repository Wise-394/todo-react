import TaskCard from "./task-card";
import { Task } from "./types";

interface TaskProps {
  task: Task[]
  handleTaskCheckbox: (id: number) => void;
  taskListFilter: "all" | "active" | "completed"
}

export default function TaskList({ task, handleTaskCheckbox, taskListFilter }: TaskProps) {
  let filteredList: Task[] = []

  if (taskListFilter === "all") {
    filteredList = task
  } else if (taskListFilter === "active") {
    filteredList = task.filter(task => task.isCompleted === false)
  } else if (taskListFilter === "completed") {
    filteredList = task.filter(task => task.isCompleted === true)
  }

  return <div className="flex flex-col gap-4 md:flex-row">
    {filteredList.map(task => (
      <TaskCard key={task.id} task={task} handleTaskCheckbox={handleTaskCheckbox} />
    ))}
  </div>
}