import { DragDropProvider } from "@dnd-kit/react";
import Column from "./Column/Column";
import "./Board.css";

function Board({
    tasks,
    setTasks,
    setActiveModal,
    setTaskToEdit,
    setConfirmMessage,
    setConfirmAction,
    filter,
}) {
    return (
        <div className="board">
            <DragDropProvider
                onDragEnd={(event)=>{
                    if (event.canceled) return 

                    const sourceId = event.operation.source.id
                    const targetId = event.operation.target?.id

                    if (!targetId) return

                    const sourceTask = tasks.find((task)=>task.id === sourceId)

                    if (sourceTask.status === targetId) return 

                    const filteredTasks = tasks.filter((task)=>task.id !== sourceId)

                    setTasks([
                        {...sourceTask, status: targetId}, ...filteredTasks
                    ])
                }}
            >
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
            </DragDropProvider>
        </div>
    );
}

export default Board;
