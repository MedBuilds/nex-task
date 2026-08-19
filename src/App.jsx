import { useState } from "react";
import { Routes, Route } from "react-router";
import Sidebar from "./components/Sidebar/Sidebar";
import BoardPage from "./pages/BoardPage/BoardPage";
import StatisticsPage from "./pages/StatisticsPage/StatisticsPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import AssistantPage from "./pages/AssistantPage/AssistantPage";
import Modal from "./components/Modal/Modal";
import TaskForm from "./components/Board/TaskForm/TaskForm";
import ConfirmDialog from "./components/ConfirmDialog/ConfirmDialog"
import SearchDialog from "./components/Board/SearchDialog/SearchDialog"
import SearchDetail from "./components/Board/SearchDialog/SearchDetail/SearchDetail";
import Data from "./data/data.json";
import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";

function App() {
    const [theme, setTheme] = useLocalStorage("theme","light");
    const [tasks, setTasks] = useLocalStorage('tasks', Data.tasks)
    const [activeModal, setActiveModal] = useState(null);
    const [taskToEdit, setTaskToEdit] = useState(null);
    const [confirmMessage, setConfirmMessage] = useState(null);
    const [confirmAction, setConfirmAction] = useState(null);
    const [filter, setFilter] = useState("all")
    const [searchedTask, setSearchedTask] = useState(null)

    return (
        <div className={`app ${theme}`}>
            <Sidebar theme={theme} setTheme={setTheme} />

            <main>
                <Routes>
                    <Route
                        index
                        element={
                            <BoardPage
                                tasks={tasks}
                                setTasks={setTasks}
                                setActiveModal={setActiveModal}
                                setTaskToEdit={setTaskToEdit}
                                setConfirmMessage={setConfirmMessage}
                                setConfirmAction={setConfirmAction}
                                filter={filter}
                                setFilter={setFilter}
                            />
                        }
                    />
                    <Route path="statistics" element={<StatisticsPage />} />
                    <Route path="settings" element={<SettingsPage />} />
                    <Route path="assistant" element={<AssistantPage />} />
                </Routes>
            </main>

            <Modal activeModal={activeModal} childName="TaskForm-Add">
                <TaskForm
                    action="add"
                    tasks={tasks}
                    setTasks={setTasks}
                    setActiveModal={setActiveModal}
                />
            </Modal>

            <Modal activeModal={activeModal} childName="TaskForm-Edit">
                <TaskForm
                    action="edit"
                    tasks={tasks}
                    setTasks={setTasks}
                    setActiveModal={setActiveModal}
                    taskToEdit={taskToEdit}
                />
            </Modal>

            <Modal activeModal={activeModal} childName="Confirm">
                <ConfirmDialog
                    confirmMessage={confirmMessage}
                    confirmAction={confirmAction}
                    setActiveModal={setActiveModal}
                />
            </Modal>

            <Modal activeModal={activeModal} childName="Search" setActiveModal={setActiveModal}>
                <SearchDialog tasks={tasks} setActiveModal={setActiveModal} setSearchedTask={setSearchedTask}/>
            </Modal>

            <Modal activeModal={activeModal} childName="Search-Detail" setActiveModal={setActiveModal}>
                <SearchDetail searchedTask={searchedTask} setActiveModal={setActiveModal}/>
            </Modal>
        </div>
    );
}

export default App;
