import Column from "./Column/Column";
import "./Board.css";

function Board({ tasks, setTasks, setActiveModal, setTaskToEdit, setConfirmMessage, setConfirmAction }) {
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
            />
            <Column
                tasks={tasks}
                setTasks={setTasks}
                status="in-progress"
                setActiveModal={setActiveModal}
                setTaskToEdit={setTaskToEdit}
                setConfirmMessage={setConfirmMessage}
                setConfirmAction={setConfirmAction}
            />
            <Column
                tasks={tasks}
                setTasks={setTasks}
                status="done"
                setActiveModal={setActiveModal}
                setTaskToEdit={setTaskToEdit}
                setConfirmMessage={setConfirmMessage}
                setConfirmAction={setConfirmAction}
            />
        </div>
    );
}

export default Board;
