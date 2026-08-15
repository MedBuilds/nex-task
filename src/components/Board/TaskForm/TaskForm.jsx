import { useState } from "react";
import dayjs from "dayjs";
import "./TaskForm.css";

function TaskForm({ action, tasks, setTasks, setActiveModal }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("high");
    const [status, setStatus] = useState("todo");
    const [dueDate, setDueDate] = useState(null);
    const [errorMessage, setErrorMessage] = useState(false);

    function saveTitle(event) {
        setTitle(event.target.value);
    }
    function saveDescription(event) {
        setDescription(event.target.value);
    }
    function savePriority(event) {
        setPriority(event.target.value);
    }
    function saveStatus(event) {
        setStatus(event.target.value);
    }
    function saveDueDate(event) {
        setDueDate(event.target.value);
    }

    function addTask() {
        if (title === "") {
            setErrorMessage("Title is required");
        } else {
            setErrorMessage(false);
            setTasks([
                {
                    id: crypto.randomUUID(),
                    title: title,
                    description: description,
                    priority: priority,
                    status: status,
                    createdAt: dayjs().toISOString(),
                    dueDate: dueDate,
                },
                ...tasks,
            ]);
            setActiveModal(null);
        }
    }

    return (
        <div className="task-form">
            <h2>{action === "add" ? "Add Task" : "Edit Task"}</h2>
            <input
                type="text"
                className="task-form-title"
                placeholder="Task Title"
                onChange={saveTitle}
            />
            <input
                type="text"
                className="task-form-description"
                placeholder="Description"
                onChange={saveDescription}
            />
            <div className="task-form-row">
                <label htmlFor="priority">Priority</label>
                <select
                    name="priority"
                    value={priority}
                    onChange={savePriority}
                >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </div>
            <div className="task-form-row">
                <label htmlFor="status">Status</label>
                <select name="status" value={status} onChange={saveStatus}>
                    <option value="todo">Todo</option>
                    <option value="in-progress">In-progress</option>
                    <option value="done">Done</option>
                </select>
            </div>
            <div className="task-form-row">
                <label htmlFor="dueDate">Due Date</label>
                <input type="date" onChange={saveDueDate} />
            </div>

            {errorMessage && (
                <div className="task-form-error-message">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-x-circle"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                    <p>{errorMessage}</p>
                </div>
            )}
            <div className="task-form-btn">
                <button
                    className="task-form-btn-cancel"
                    onClick={() => setActiveModal(null)}
                >
                    Cancel
                </button>
                <button className="task-form-btn-add" onClick={addTask}>
                    Add
                </button>
            </div>
        </div>
    );
}

export default TaskForm;
