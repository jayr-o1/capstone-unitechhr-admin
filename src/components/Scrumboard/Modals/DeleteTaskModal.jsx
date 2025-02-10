const DeleteTaskModal = ({ onClose, onDelete }) => {
    return (
        <div className="fixed inset-0 z-[999] bg-[black]/60">
            <div className="flex min-h-screen items-center justify-center px-4">
                <div className="panel my-8 w-[90%] max-w-lg overflow-hidden rounded-lg border-0 p-0 md:w-full">
                    <button
                        type="button"
                        className="absolute top-4 text-white-dark ltr:right-4 rtl:left-4"
                        onClick={onClose}
                    >
                        {/* Close SVG */}
                    </button>
                    <div className="bg-[#fbfbfb] py-3 text-lg font-medium ltr:pl-5 ltr:pr-[50px] rtl:pl-[50px] rtl:pr-5 dark:bg-[#121c2c]">
                        Delete Task
                    </div>
                    <div className="p-5 text-center">
                        <div className="mx-auto w-fit rounded-full bg-danger p-4 text-white ring-4 ring-danger/30">
                            {/* Delete SVG */}
                        </div>
                        <div className="mx-auto mt-5 text-base sm:w-3/4">
                            Are you sure you want to delete Task?
                        </div>
                        <div className="mt-8 flex items-center justify-center">
                            <button
                                type="button"
                                className="btn btn-outline-danger"
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary ltr:ml-4 rtl:mr-4"
                                onClick={onDelete}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteTaskModal;
