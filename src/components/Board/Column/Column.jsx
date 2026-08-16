import TaskCard from "../TaskCard/TaskCard";
import "./Column.css";

function Column({ tasks, status, setActiveModal, setTaskToEdit}) {
    const filteredTasks = tasks.filter((task) => task.status === status);
    return (
        <div className={`column column-${status}`}>
            <h2>
                {status[0].toUpperCase() + status.slice(1)} (
                {filteredTasks.length})
            </h2>
            <hr />
            <div className="column-tasks">
                {filteredTasks.map((task) => {
                    return (
                        <TaskCard
                            task={task}
                            key={task.id}
                            setActiveModal={setActiveModal}
                            setTaskToEdit={setTaskToEdit}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Column;
