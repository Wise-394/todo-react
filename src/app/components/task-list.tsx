import TaskCard from "./task-card";

  const taskData = [
  { id: '1', title: 'Task 1', description: 'This is an example task description.', isCompleted: false },
  { id: '2', title: 'Task 2', description: 'Another task with a different description.', isCompleted: false },
  { id: '3', title: 'Task 3', description: 'Yet another task to display in the list.', isCompleted: false },
  { id: '4', title: 'Task 4', description: 'This task has a unique description.', isCompleted: false },
  { id: '5', title: 'Task 5', description: 'Final task in the sample data array.', isCompleted: false }
];;

  export default function TaskList() {
    return <div className="flex flex-col gap-4 md:flex-row">
        {taskData.map(task => (
          <TaskCard key={task.id} title={task.title} description={task.description} />
        ))}
      </div>
  }