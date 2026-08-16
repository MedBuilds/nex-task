import Header from "../../components/Header/Header";
import Board from "../../components/Board/Board";
import "./BoardPage.css";

function BoardPage({ tasks, setTasks, setActiveModal, setTaskToEdit, setConfirmMessage, setConfirmAction }) {
    return (
        <div className="board-page">
            <title>NexTask - Board</title>

            <Header
                title="Board"
                actions={true}
                setActiveModal={setActiveModal}
            />
            <Board
                tasks={tasks}
                setTasks={setTasks}
                setActiveModal={setActiveModal}
                setTaskToEdit={setTaskToEdit}
                setConfirmMessage={setConfirmMessage}
                setConfirmAction={setConfirmAction}
            />
        </div>
    );
}

export default BoardPage;
