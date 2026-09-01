import { useState } from "react";
import { Routes, Route } from "react-router";
import Sidebar from "./components/Sidebar/Sidebar";
import BoardPage from "./pages/BoardPage/BoardPage";
import StatisticsPage from "./pages/StatisticsPage/StatisticsPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import Modal from "./components/Modal/Modal";
import TaskForm from "./components/Board/TaskForm/TaskForm";
import ConfirmDialog from "./components/ConfirmDialog/ConfirmDialog"
import SearchDialog from "./components/Board/SearchDialog/SearchDialog"
import SearchDetail from "./components/Board/SearchDialog/SearchDetail/SearchDetail";
import Assistant from "./components/Assistant/Assistant";
import Data from "./data/data.json";
import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";

function App() {
    const [theme, setTheme] = useLocalStorage("theme","light");
    const [sidebarOpen, setSidebarOpen] = useLocalStorage("sidebarOpen",true);
    const [tasks, setTasks] = useLocalStorage('tasks', Data.tasks)
    const [activeModal, setActiveModal] = useState(null);
    const [taskToEdit, setTaskToEdit] = useState(null);
    const [confirmMessage, setConfirmMessage] = useState(null);
    const [confirmAction, setConfirmAction] = useState(null);
    const [filter, setFilter] = useState("all")
    const [searchedTask, setSearchedTask] = useState(null)

    const assistantInitialMessages = [
        {
            id: crypto.randomUUID(),
            role: "assistant",
            message: "Hi there! 👋 Welcome to NexTask."
        },
        {
            id: crypto.randomUUID(),
            role: "assistant",
            message: 'Ask me things like "how do I add a task" or "how do I change the theme"...'
        },
        {
            id: crypto.randomUUID(),
            role: "assistant",
            message: "Happy to help!"
        }
    ]
    const [chatMessages, setChatMessages] = useLocalStorage("chatMessages", assistantInitialMessages);

    return (
        <div className={`app ${theme}`}>
            <Sidebar 
                theme={theme} 
                setTheme={setTheme} 
                sidebarOpen={sidebarOpen} 
                setSidebarOpen={setSidebarOpen} 
                setActiveModal={setActiveModal}
            />

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
                    <Route path="statistics" element={<StatisticsPage tasks={tasks}/>} />
                    <Route 
                        path="settings" 
                        element={
                            <SettingsPage 
                                theme={theme} 
                                setTheme={setTheme}
                                setTasks={setTasks}
                                setConfirmMessage={setConfirmMessage}
                                setConfirmAction={setConfirmAction}
                                setActiveModal={setActiveModal}
                                setSidebarOpen={setSidebarOpen}
                                setChatMessages={setChatMessages}
                                assistantInitialMessages={assistantInitialMessages}
                            />
                        } 
                    />
                </Routes>
            </main>

            <Modal activeModal={activeModal} childName="TaskForm-Add" setActiveModal={setActiveModal}>
                <TaskForm
                    action="add"
                    tasks={tasks}
                    setTasks={setTasks}
                    setActiveModal={setActiveModal}
                />
            </Modal>

            <Modal activeModal={activeModal} childName="TaskForm-Edit" setActiveModal={setActiveModal}>
                <TaskForm
                    action="edit"
                    tasks={tasks}
                    setTasks={setTasks}
                    setActiveModal={setActiveModal}
                    taskToEdit={taskToEdit}
                />
            </Modal>

            <Modal activeModal={activeModal} childName="Confirm" setActiveModal={setActiveModal}>
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

            <Modal activeModal={activeModal} childName="Assistant" setActiveModal={setActiveModal}>
                <Assistant setActiveModal={setActiveModal} chatMessages={chatMessages} setChatMessages={setChatMessages} assistantInitialMessages={assistantInitialMessages}/>
            </Modal>
        </div>
    );
}

export default App;
