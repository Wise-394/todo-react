import TaskCard from "./components/task-card";

export default function Home() {

  const taskData = [
    {
      id: '1',
      title: 'Task 1',
      description: 'This is an example task description.'
    },
    {
      id: '2',
      title: 'Task 2',
      description: 'Another task with a different description.'
    },
    {
      id: '3',
      title: 'Task 3',
      description: 'Yet another task to display in the list.'
    },
    {
      id: '4',
      title: 'Task 4',
      description: 'This task has a unique description.'
    },
    {
      id: '5',
      title: 'Task 5',
      description: 'Final task in the sample data array.'
    }
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-primary">
      <p className="text-base text-white sm:text-lg md:text-xl lg:text-2xl">Ongoing Task</p>
      <div className="flex flex-col gap-4 md:flex-row">
      {taskData.map(task => (
          <TaskCard key={task.id} title={task.title} description={task.description} />
        ))}
      </div>
    </div>
  );
}
