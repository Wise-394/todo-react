import TaskCard from "./components/task-card";

export default function Home() {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-primary">
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white">Ongoing Task</p>
      <div className="flex flex-col md:flex-row gap-4">
        <TaskCard />

      </div>

    </div>
  );
}
