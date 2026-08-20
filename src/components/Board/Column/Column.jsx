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
    const { ref, isDropTarget } = useDroppable({ id: status })

    const filteredTasks = filter === "all" 
        ? tasks.filter((task) => task.status === status)
        : tasks.filter((task) => task.status === status && task.priority === filter)
    
    return (
        <div 
            className={
                isDropTarget
                    ? `column column-${status} column-target`
                    : `column column-${status}`
            } 
            ref={ ref }
        >
            <h2>
                {status[0].toUpperCase() + status.slice(1)} (
                {filteredTasks.length})
            </h2>
            <hr />
            <div className="column-tasks">
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
