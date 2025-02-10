const AddTaskModal = ({ onClose, onAddTask }) => {
    const [title, setTitle] = useState("");
    const [tags, setTags] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            title,
            tags: tags.split(","),
            description,
            date: new Date().toLocaleDateString(),
        };
        onAddTask(newTask);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[999] bg-[black]/60">
            <div className="flex min-h-screen items-center justify-center px-4">
                <div className="panel my-8 w-[90%] max-w-lg overflow-hidden rounded-lg border-0 p-0 md:w-full">
                    <button
                        type="button"
                        className="absolute top-4 text-white-dark hover:text-dark ltr:right-4 rtl:left-4"
                        onClick={onClose}
                    >
                        {/* Close SVG */}
                    </button>
                    <div className="bg-[#fbfbfb] py-3 text-lg font-medium ltr:pl-5 ltr:pr-[50px] rtl:pl-[50px] rtl:pr-5 dark:bg-[#121c2c]">
                        Add Task
                    </div>
                    <div className="p-5">
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-5">
                                <div>
                                    <label htmlFor="taskTitle">Name</label>
                                    <input
                                        id="taskTitle"
                                        type="text"
                                        className="form-input"
                                        placeholder="Enter Name"
                                        value={title}
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <label htmlFor="taskTag">Tag</label>
                                    <input
                                        id="taskTag"
                                        type="text"
                                        className="form-input"
                                        placeholder="Enter Tag"
                                        value={tags}
                                        onChange={(e) =>
                                            setTags(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <label htmlFor="taskdesc">
                                        Description
                                    </label>
                                    <textarea
                                        id="taskdesc"
                                        className="form-textarea min-h-[130px]"
                                        placeholder="Enter Description"
                                        value={description}
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
                                    ></textarea>
                                </div>
                            </div>
                            <div className="mt-8 flex items-center justify-end">
                                <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    onClick={onClose}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary ltr:ml-4 rtl:mr-4"
                                >
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTaskModal;
