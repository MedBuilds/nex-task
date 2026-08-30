import './DangerZone.css'

function DangerZone({ setTasks, setConfirmMessage, setConfirmAction, setActiveModal, setSidebarOpen, setTheme, setChatMessages, assistantInitialMessages }){
    function deleteAllTasks() {
        setTasks([])
        setActiveModal(null)
    }

    function resetApplication() {
        setSidebarOpen(false)
        setTheme('light')
        setTasks([])
        setActiveModal(null)
        setChatMessages(assistantInitialMessages)
    }

    return (
        <div className="danger-zone">
            <h2>Danger zone</h2>
            <p className="danger-zone-description">Be careful — These actions can't be undone.</p>

            <div className='danger-zone-actions'>
                <div className="danger-zone-delete-tasks">
                    <div className='danger-zone-info'>
                        <h3 className='danger-zone-title'>Delete all tasks</h3>
                        <p className='danger-zone-action-description'>Remove every task you've created. Your theme and layout preferences stay as they are.</p>
                    </div>
                    <button 
                        className='danger-zone-btn'
                        onClick={()=>{
                            setConfirmMessage("Are you sure you want to delete all tasks?") 
                            setConfirmAction(()=>deleteAllTasks)
                            setActiveModal('Confirm')
                        }}
                    >
                        Delete tasks</button>
                </div>

                <div className="danger-zone-reset-app">
                    <div className='danger-zone-info'>
                        <h3 className='danger-zone-title'>Reset application</h3>
                        <p className='danger-zone-action-description'>Wipe all tasks and preferences, and start over from a blank workspace.</p>
                    </div>
                    <button 
                        className='danger-zone-btn'
                        onClick={()=>{
                            setConfirmMessage("Are you sure you want to reset everything?") 
                            setConfirmAction(()=>resetApplication)
                            setActiveModal('Confirm')
                        }}
                    >
                        Reset everything</button>
                </div>
            </div>
        </div>
    )
}

export default DangerZone