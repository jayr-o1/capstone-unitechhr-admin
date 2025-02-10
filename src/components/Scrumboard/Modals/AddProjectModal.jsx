const AddProjectModal = ({ onClose, onAddProject }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddProject(title);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[999] bg-[black]/60 px-4">
            <div className="flex min-h-screen items-center justify-center">
                <div className="panel my-8 w-[90%] max-w-lg overflow-hidden rounded-lg border-0 p-0 md:w-full">
                    <button
                        type="button"
                        className="absolute top-4 text-white-dark hover:text-dark ltr:right-4 rtl:left-4"
                        onClick={onClose}
                    >
                        {/* Close SVG */}
                    </button>
                    <div className="bg-[#fbfbfb] py-3 text-lg font-medium ltr:pl-5 ltr:pr-[50px] rtl:pl-[50px] rtl:pr-5 dark:bg-[#121c2c]">
                        Add Project
                    </div>
                    <div className="p-5">
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-5">
                                <div>
                                    <label htmlFor="title">Name</label>
                                    <input
                                        id="title"
                                        type="text"
                                        className="form-input mt-1"
                                        placeholder="Enter Name"
                                        value={title}
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                    />
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

export default AddProjectModal;
