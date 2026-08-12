import { useState } from 'react'
import { Routes, Route } from 'react-router'
import BoardPage from './pages/BoardPage/BoardPage'
import StatisticsPage from './pages/StatisticsPage/StatisticsPage'
import SettingsPage from './pages/SettingsPage/SettingsPage'
import AssistantPage from './pages/AssistantPage/AssistantPage'
import './App.css'

function App() {
  const [theme] = useState('light')

  return (
    <div className={`app ${theme}`}>
      <main>
        <Routes>
          <Route index element={<BoardPage />} />
          <Route path="statistics" element={<StatisticsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="assistant" element={<AssistantPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
