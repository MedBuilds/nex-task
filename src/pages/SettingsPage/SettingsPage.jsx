import Header from "../../components/Header/Header";
import Settings from "../../components/Settings/Settings";
import "./SettingsPage.css";

function SettingsPage({ theme, setTheme, setTasks, setConfirmMessage, setConfirmAction, setActiveModal, setSidebarOpen, setChatMessages, assistantInitialMessages }) {
    return (
        <div className="settings-page">
            <title>NexTask - Settings</title>

            <Header title="Settings" actions={false} />

            <Settings 
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
        </div>
    );
}

export default SettingsPage;
