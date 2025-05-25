import TaskCard from "./task-card";
import { Task } from "./types";

interface TaskProps {
  task: Task[]
  handleTaskCheckbox: (id: number) => void;
}

export default function TaskList({ task, handleTaskCheckbox }: TaskProps) {
  return <div className="flex flex-col gap-4 md:flex-row">
    {task.map(task => (
      <TaskCard key={task.id} task = {task} handleTaskCheckbox={handleTaskCheckbox} />
    ))}
  </div>
}