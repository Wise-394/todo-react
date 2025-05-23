export default function TaskCard() {
    const title = "Task Title";
    const description = "Task Description"
    return (
        <div className="flex flex-row justify-between w-full p-3 rounded bg-card md:w-1/2 lg:w-1/4">
            <div>
                <p className="text-white">{title}</p>
                <p className="text-white">{description}</p>
            </div>
            <div>
                <input type="checkbox" className="scale-150 bg-white border-2 border-gray-400 rounded-sm" />
            </div>
        </div>

    )
}