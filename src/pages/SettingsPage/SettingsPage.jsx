import Header from "../../components/Header/Header";
import "./SettingsPage.css";

function SettingsPage() {
    return (
        <div className="settings-page">
            <title>NexTask - Settings</title>

            <Header title="Settings" actions={false} />
        </div>
    );
}

export default SettingsPage;
