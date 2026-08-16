import Column from "./Column/Column";
import "./Board.css";

function Board({ tasks, setActiveModal, setTaskToEdit }) {
    return (
        <div className="board">
            <Column
                tasks={tasks}
                status="todo"
                setActiveModal={setActiveModal}
                setTaskToEdit={setTaskToEdit}
            />
            <Column
                tasks={tasks}
                status="in-progress"
                setActiveModal={setActiveModal}
                setTaskToEdit={setTaskToEdit}
            />
            <Column
                tasks={tasks}
                status="done"
                setActiveModal={setActiveModal}
                setTaskToEdit={setTaskToEdit}
            />
        </div>
    );
}

export default Board;
