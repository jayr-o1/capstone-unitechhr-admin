const TaskItem = ({ task, onDelete }) => {
    return (
        <div className="mb-5 cursor-move space-y-3 rounded-md bg-[#f4f4f4] p-3 pb-5 shadow dark:bg-[#262e40]">
            <div className="text-base font-medium">{task.title}</div>
            <p className="break-all">{task.description}</p>
            <div className="flex flex-wrap items-center gap-2">
                {task.tags?.map((tag, i) => (
                    <div
                        key={i}
                        className="btn btn-outline-primary flex px-2 py-1"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 shrink-0"
                        >
                            {/* SVG Path */}
                        </svg>
                        <span className="ltr:ml-2 rtl:mr-2">{tag}</span>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center font-medium hover:text-primary">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 shrink-0 ltr:mr-3 rtl:ml-3"
                    >
                        {/* SVG Path */}
                    </svg>
                    <span>{task.date}</span>
                </div>
                <div className="flex items-center">
                    <button
                        type="button"
                        className="hover:text-info"
                        onClick={() => {}}
                    >
                        {/* Edit SVG */}
                    </button>
                    <button
                        type="button"
                        className="hover:text-danger"
                        onClick={onDelete}
                    >
                        {/* Delete SVG */}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskItem;
