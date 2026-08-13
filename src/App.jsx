import { useState } from 'react'
import { Routes, Route } from 'react-router'
import Sidebar from './components/Sidebar/Sidebar'
import BoardPage from './pages/BoardPage/BoardPage'
import StatisticsPage from './pages/StatisticsPage/StatisticsPage'
import SettingsPage from './pages/SettingsPage/SettingsPage'
import AssistantPage from './pages/AssistantPage/AssistantPage'
import Data from './data/data.json'
import './App.css'

function App() {
  const [ theme, setTheme ] = useState('light')
  const [ tasks ] = useState(Data.tasks)

  return (
    <div className={`app ${theme}`}>
      <Sidebar theme={theme} setTheme={setTheme} />
      
      <main>
        <Routes>
          <Route index element={<BoardPage tasks={tasks}/>} />
          <Route path="statistics" element={<StatisticsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="assistant" element={<AssistantPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
