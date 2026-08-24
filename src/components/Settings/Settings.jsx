import Appearance from './Appearance/Appearance'
import DangerZone from './DangerZone/DangerZone'
import './Settings.css'

function Settings({ theme, setTheme, setTasks, setConfirmMessage, setConfirmAction, setActiveModal, setSidebarOpen  }){
    return (
        <div className="settings">
            <Appearance theme={theme} setTheme={setTheme}/>
            <DangerZone 
                setTasks={setTasks}
                setConfirmMessage={setConfirmMessage}
                setConfirmAction={setConfirmAction}
                setActiveModal={setActiveModal}
                setSidebarOpen={setSidebarOpen}
                setTheme={setTheme}
            />
        </div>
    )
}

export default Settings