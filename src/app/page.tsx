import TaskCard from "./components/task-card";
import TaskList from "./components/task-list";
import { TabItem, Tabs } from "flowbite-react";
export default function Home() {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-primary">
      <p className="text-base text-white sm:text-lg md:text-xl lg:text-2xl">Your ToDo list</p>
      <Tabs>
        <TabItem title = "all">
          <TaskList/>
        </TabItem>
        <TabItem title = "active">
          <p>Test</p>
        </TabItem>
        <TabItem title = "completed">
          <p>Test</p>
        </TabItem>
      </Tabs>
      
    </div>
  );
}
