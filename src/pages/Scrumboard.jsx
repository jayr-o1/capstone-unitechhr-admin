import React, { useState } from "react";

const Scrumboard = () => {
    const [projects, setProjects] = useState([
        { id: 1, title: "In Progress", tasks: [] },
        { id: 2, title: "Pending", tasks: [] },
        { id: 3, title: "Complete", tasks: [] },
        { id: 4, title: "Working", tasks: [] },
    ]);

    const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false);
    const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const [selectedTask, setSelectedTask] = useState(null);

    const addProject = (title) => {
        const newProject = {
            id: projects.length + 1,
            title,
            tasks: [],
        };
        setProjects([...projects, newProject]);
    };

    const addTask = (projectId, task) => {
        const updatedProjects = projects.map((project) =>
            project.id === projectId
                ? { ...project, tasks: [...project.tasks, task] }
                : project
        );
        setProjects(updatedProjects);
    };

    const deleteTask = (projectId, taskId) => {
        const updatedProjects = projects.map((project) =>
            project.id === projectId
                ? {
                      ...project,
                      tasks: project.tasks.filter((task) => task.id !== taskId),
                  }
                : project
        );
        setProjects(updatedProjects);
    };

    return (
        <div className="p-6">
            <div>
                <button
                    className="btn btn-primary flex"
                    onClick={() => setIsAddProjectModalOpen(true)}
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
                        className="h-5 w-5 ltr:mr-3 rtl:ml-3"
                    >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    Add Project
                </button>
            </div>

            <div className="relative pt-5">
                <div className="perfect-scrollbar -mx-2 h-full ps">
                    <div className="flex flex-nowrap items-start gap-5 overflow-x-auto px-2 pb-2">
                        {projects.map((project) => (
                            <ProjectPanel
                                key={project.id}
                                project={project}
                                onAddTask={() => {
                                    setSelectedProjectId(project.id);
                                    setIsAddTaskModalOpen(true);
                                }}
                                onDeleteTask={(taskId) =>
                                    deleteTask(project.id, taskId)
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>

            {isAddProjectModalOpen && (
                <AddProjectModal
                    onClose={() => setIsAddProjectModalOpen(false)}
                    onAddProject={addProject}
                />
            )}

            {isAddTaskModalOpen && (
                <AddTaskModal
                    onClose={() => setIsAddTaskModalOpen(false)}
                    onAddTask={(task) => addTask(selectedProjectId, task)}
                />
            )}

            {isDeleteModalOpen && (
                <DeleteTaskModal
                    onClose={() => setIsDeleteModalOpen(false)}
                    onDelete={() =>
                        deleteTask(selectedProjectId, selectedTask.id)
                    }
                />
            )}
        </div>
    );
};

export default Scrumboard;
