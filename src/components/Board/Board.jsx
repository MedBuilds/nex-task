import Column from "./Column/Column";
import "./Board.css";

function Board({ tasks }) {
    return (
        <div className="board">
            <Column tasks={tasks} status="todo" />
            <Column tasks={tasks} status="in-progress" />
            <Column tasks={tasks} status="done" />
        </div>
    );
}

export default Board;
