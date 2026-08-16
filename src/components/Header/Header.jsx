import "./Header.css";

function Header({ title, actions, setActiveModal }) {
    return (
        <header>
            <div className="header-title">
                <h1>NexTask - {title}</h1>
                <h3>
                    Plan <span>•</span> Focus <span>•</span> Achieve
                </h3>
            </div>
            {actions && (
                <div className="header-actions">
                    <button
                        className="add-task"
                        onClick={() => {
                            setActiveModal("TaskForm-Add")
                            
                        }}
                    >
                        Add Task
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-plus-lg"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                            />
                        </svg>
                    </button>
                </div>
            )}
        </header>
    );
}

export default Header;
