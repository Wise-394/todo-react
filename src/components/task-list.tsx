import TaskCard from "./task-card";
import { Task } from "./types";

interface TaskProps {
  task : Task[]
}

  export default function TaskList({task} : TaskProps) {
    return <div className="flex flex-col gap-4 md:flex-row">
        {task.map(task => (
          <TaskCard key={task.id} title={task.title} description={task.description} />
        ))}
      </div>
  }