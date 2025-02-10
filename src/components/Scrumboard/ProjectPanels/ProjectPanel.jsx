const ProjectPanel = ({ project, onAddTask, onDeleteTask }) => {
    return (
        <div className="panel w-80 flex-none">
            <div className="mb-5 flex justify-between">
                <h4 className="text-base font-semibold">{project.title}</h4>
                <div className="flex items-center">
                    <button
                        type="button"
                        className="hover:text-primary ltr:mr-2 rtl:ml-2"
                        onClick={onAddTask}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                        >
                            <circle
                                opacity="0.5"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            ></circle>
                            <path
                                d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            ></path>
                        </svg>
                    </button>
                    {/* Add more buttons and dropdowns here */}
                </div>
            </div>

            <div className="sortable-list min-h-[150px]" data-id={project.id}>
                {project.tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onDelete={() => onDeleteTask(task.id)}
                    />
                ))}
            </div>

            <div className="pt-3">
                <button
                    type="button"
                    className="btn btn-primary mx-auto"
                    onClick={onAddTask}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                    >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    Add Task
                </button>
            </div>
        </div>
    );
};

export default ProjectPanel;
