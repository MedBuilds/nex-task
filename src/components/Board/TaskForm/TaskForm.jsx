import { useState } from "react";
import dayjs from "dayjs";
import "./TaskForm.css";

function TaskForm({
    action,
    tasks,
    setTasks,
    setActiveModal,
    taskToEdit = {},
}) {

    const [title, setTitle] = useState(taskToEdit.title || "");
    const [description, setDescription] = useState(taskToEdit.description || "");
    const [priority, setPriority] = useState(taskToEdit.priority || "high");
    const [status, setStatus] = useState(taskToEdit.status || "todo");
    const [dueDate, setDueDate] = useState(taskToEdit.dueDate || "");
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
        if (title.trim() === "") {
            setErrorMessage(true);
        } else {
            setTasks([
                {
                    id: crypto.randomUUID(),
                    title: title.trim(),
                    description: description.trim(),
                    priority: priority,
                    status: status,
                    createdAt: dayjs().toISOString(),
                    dueDate: dueDate || null,
                },
                ...tasks,
            ]);
            setActiveModal(null);
        }
    }

    function editTask() {
        if (title.trim() === "") {
            setErrorMessage(true);
        } else {
            const newTasks = tasks.filter((task) => task.id !== taskToEdit.id);
            setTasks([
                {
                    id: taskToEdit.id,
                    title: title.trim(),
                    description: description.trim(),
                    priority: priority,
                    status: status,
                    createdAt: taskToEdit.createdAt,
                    dueDate: dueDate || null,
                },
                ...newTasks
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
                value={title}
            />
            <input
                type="text"
                className="task-form-description"
                placeholder="Description"
                onChange={saveDescription}
                value={description}
            />
            <div className="task-form-row">
                <label htmlFor="priority">Priority</label>
                <select
                    name="priority"
                    id="priority"
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
                <select name="status" id="status" value={status} onChange={saveStatus}>
                    <option value="todo">Todo</option>
                    <option value="in-progress">In-progress</option>
                    <option value="done">Done</option>
                </select>
            </div>
            <div className="task-form-row">
                <label htmlFor="dueDate">Due Date</label>
                <input
                    type="date"
                    id="dueDate"
                    value={dueDate ? dayjs(dueDate).format("YYYY-MM-DD") : ""}
                    onChange={saveDueDate}
                />
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
                    <p>Title is required</p>
                </div>
            )}
            <div className="task-form-btn">
                <button
                    className="task-form-btn-cancel"
                    onClick={() => setActiveModal(null)}
                >
                    Cancel
                </button>
                {action === "add" ? (
                    <button className="task-form-btn-add" onClick={addTask}>
                        Add
                    </button>
                ) : (
                    <button className="task-form-btn-edit" onClick={editTask}>
                        Edit
                    </button>
                )}
            </div>
        </div>
    );
}

export default TaskForm;
