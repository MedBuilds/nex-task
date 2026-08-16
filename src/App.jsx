import { useState } from "react";
import { Routes, Route } from "react-router";
import Sidebar from "./components/Sidebar/Sidebar";
import BoardPage from "./pages/BoardPage/BoardPage";
import StatisticsPage from "./pages/StatisticsPage/StatisticsPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import AssistantPage from "./pages/AssistantPage/AssistantPage";
import Modal from "./components/Modal/Modal";
import TaskForm from "./components/Board/TaskForm/TaskForm";
import Data from "./data/data.json";
import "./App.css";

function App() {
    const [theme, setTheme] = useState("light");
    const [tasks, setTasks] = useState(Data.tasks);
    const [activeModal, setActiveModal] = useState(null);
    const [taskToEdit, setTaskToEdit] = useState(null);

    return (
        <div className={`app ${theme}`}>
            <Sidebar theme={theme} setTheme={setTheme} />

            <main>
                <Routes>
                    <Route index element={<BoardPage tasks={tasks} setActiveModal={setActiveModal} setTaskToEdit={setTaskToEdit}/>} />
                    <Route path="statistics" element={<StatisticsPage />} />
                    <Route path="settings" element={<SettingsPage />} />
                    <Route path="assistant" element={<AssistantPage />} />
                </Routes>
            </main>

            <Modal activeModal={activeModal} childName="TaskForm-Add">
                <TaskForm action="add" tasks={tasks} setTasks={setTasks} setActiveModal={setActiveModal}/>
            </Modal>
            
            <Modal activeModal={activeModal} childName="TaskForm-Edit">
                <TaskForm action="edit" tasks={tasks} setTasks={setTasks} setActiveModal={setActiveModal} taskToEdit={taskToEdit}/>
            </Modal>
        </div>
    );
}

export default App;
