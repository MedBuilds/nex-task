import Column from "./Column/Column";
import "./Board.css";

function Board({ tasks, setTasks, setActiveModal, setTaskToEdit, setConfirmMessage, setConfirmAction, filter }) {
    return (
        <div className="board">
            <Column
                tasks={tasks}
                setTasks={setTasks}
                status="todo"
                setActiveModal={setActiveModal}
                setTaskToEdit={setTaskToEdit}
                setConfirmMessage={setConfirmMessage}
                setConfirmAction={setConfirmAction}
                filter={filter}
            />
            <Column
                tasks={tasks}
                setTasks={setTasks}
                status="in-progress"
                setActiveModal={setActiveModal}
                setTaskToEdit={setTaskToEdit}
                setConfirmMessage={setConfirmMessage}
                setConfirmAction={setConfirmAction}
                filter={filter}
            />
            <Column
                tasks={tasks}
                setTasks={setTasks}
                status="done"
                setActiveModal={setActiveModal}
                setTaskToEdit={setTaskToEdit}
                setConfirmMessage={setConfirmMessage}
                setConfirmAction={setConfirmAction}
                filter={filter}
            />
        </div>
    );
}

export default Board;
