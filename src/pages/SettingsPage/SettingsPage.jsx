import Header from "../../components/Header/Header";
import Settings from "../../components/Settings/Settings";
import "./SettingsPage.css";

function SettingsPage({ theme, setTheme }) {
    return (
        <div className="settings-page">
            <title>NexTask - Settings</title>

            <Header title="Settings" actions={false} />

            <Settings theme={theme} setTheme={setTheme}/>
        </div>
    );
}

export default SettingsPage;
