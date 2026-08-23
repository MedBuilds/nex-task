import Appearance from './Appearance/Appearance'
import './Settings.css'

function Settings({ theme, setTheme }){
    return (
        <div className="settings">
            <Appearance theme={theme} setTheme={setTheme}/>
        </div>
    )
}

export default Settings