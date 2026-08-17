import "./Header.css";

function Header({ title, actions, setActiveModal, filter, setFilter }) {
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
                    <div className="filter-container">
                        <select className="filter" name="filter" value={filter} onChange={(event)=>setFilter(event.target.value)}>
                            <option value="all">All priorities</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-funnel"
                            viewBox="0 0 16 16"
                        >
                            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
                        </svg>
                    </div>
                    <button
                        className="add-task"
                        onClick={() => {
                            setActiveModal("TaskForm-Add");
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
