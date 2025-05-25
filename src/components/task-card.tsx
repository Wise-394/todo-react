import { Task } from "./types";

interface Props {
    task: Task
    handleTaskCheckbox: (id: number) => void
}
export default function TaskCard({task, handleTaskCheckbox}: Props) {

    const handleOnChange = () => {
        handleTaskCheckbox(task.id);
    }

    return (
        <div className="flex flex-row justify-between w-full p-3 rounded-lg bg-card md:w-1/2 lg:w-1/4">
            <div>
                <p className="text-white">{task.title}</p>
               <p className={`text-white${task.isCompleted ? ' line-through' : ''}`}>{task.description}</p>
            </div>
            <div>
                <input type="checkbox" className="scale-150 bg-white border-2 border-gray-400 rounded-sm" 
                checked= {task.isCompleted} onChange={handleOnChange}/>
            </div>
        </div>

    )
}