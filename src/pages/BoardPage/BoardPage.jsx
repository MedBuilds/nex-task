import Header from "../../components/Header/Header";
import "./BoardPage.css";

function BoardPage() {
    return (
        <div className="board-page">
            <title>NexTask - Board</title>

            <Header title="Board" actions={true} />
        </div>
    );
}

export default BoardPage;
