import { Routes, Route } from 'react-router'
import BoardPage from './pages/BoardPage'
import StatisticsPage from './pages/StatisticsPage'
import SettingsPage from './pages/SettingsPage'
import AssistantPage from './pages/AssistantPage'
import './App.css'

function App() {
  return (
    <div className="app">
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
