import { useState } from "react";
import { useDroppable } from "@dnd-kit/react";
import TaskCard from "../TaskCard/TaskCard";
import "./Column.css";

function Column({
    tasks,
    setTasks,
    status,
    setActiveModal,
    setTaskToEdit,
    setConfirmMessage,
    setConfirmAction,
    filter,
}) {
    const { ref, isDropTarget } = useDroppable({ id: status });
    const [showColumn, setShowColumn] = useState(true);

    const filteredTasks =
        filter === "all"
            ? tasks.filter((task) => task.status === status)
            : tasks.filter(
                (task) => task.status === status && task.priority === filter
            );

    let emptyMessage;
    if (tasks.length === 0){
        emptyMessage = "No tasks yet"
    } else if (filteredTasks.length === 0) {
        if (status === "todo") {
            emptyMessage = "Nothing to do yet" 
        }
        if (status === "in-progress") {
            emptyMessage = "No tasks in progress" 
        }
        if (status === "done") {
            emptyMessage = "No completed tasks yet" 
        }
    }

    function toggleShowColumn() {
        setShowColumn(!showColumn);
    }

    return (
        <div
            className={`column column-${status} ${isDropTarget && "column-target"} ${!showColumn && "column-hidden"}`}
            ref={ref}
        >
            <div className="column-header">
                <h2>
                    {status[0].toUpperCase() + status.slice(1)} 
                    <span>{filteredTasks.length}</span>
                </h2>
                <button
                    className="show-column-tasks-btn"
                    onClick={toggleShowColumn}
                >
                    {showColumn ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-caret-up-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-caret-down-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                    )}
                </button>
            </div>
            {showColumn && <hr className="column-hr"/>} 
            <div
                className={`column-tasks ${
                    !showColumn ? "column-tasks-hidden" : ""
                }`}
            >
                {emptyMessage && <p className="column-tasks-empty">{emptyMessage}</p>}
                {filteredTasks.map((task) => {
                    return (
                        <TaskCard
                            tasks={tasks}
                            setTasks={setTasks}
                            task={task}
                            key={task.id}
                            setActiveModal={setActiveModal}
                            setTaskToEdit={setTaskToEdit}
                            setConfirmMessage={setConfirmMessage}
                            setConfirmAction={setConfirmAction}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Column;
