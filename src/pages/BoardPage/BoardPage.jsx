import Header from "../../components/Header/Header";
import Board from "../../components/Board/Board";
import "./BoardPage.css";

function BoardPage({tasks}) {
    return (
        <div className="board-page">
            <title>NexTask - Board</title>

            <Header title="Board" actions={true} />
            <Board tasks={tasks}/>
        </div>
    );
}

export default BoardPage;
