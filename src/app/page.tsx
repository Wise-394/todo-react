"use client";
import { useState } from "react";
import TaskList from "@/components/task-list";
import { TabItem, Tabs } from "flowbite-react";
export default function Home() {

  const taskData = [
    { id: 1, title: 'Task 1', description: 'This is an example task description.', isCompleted: false },
    { id: 2, title: 'Task 2', description: 'Another task with a different description.', isCompleted: false },
    { id: 3, title: 'Task 3', description: 'Yet another task to display in the list.', isCompleted: false },
    { id: 4, title: 'Task 4', description: 'This task has a unique description.', isCompleted: false },
    { id: 5, title: 'Task 5', description: 'Final task in the sample data array.', isCompleted: false }
  ];;


  const [taskState, setTaskState] = useState(taskData)

  const handleTaskCheckbox = (id: number) => {
    setTaskState(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-primary">
      <p className="text-base text-white sm:text-lg md:text-xl lg:text-2xl">Your ToDo list</p>
      <Tabs>
        <TabItem title="all">
          <TaskList task={taskState} handleTaskCheckbox={handleTaskCheckbox} taskListFilter="all"/>
        </TabItem>
        <TabItem title="active">
          <TaskList task={taskState} handleTaskCheckbox={handleTaskCheckbox} taskListFilter="active"/>
        </TabItem>
        <TabItem title="completed">
          <TaskList task={taskState} handleTaskCheckbox={handleTaskCheckbox} taskListFilter="completed"/>
        </TabItem>
      </Tabs>

    </div>
  );
}
