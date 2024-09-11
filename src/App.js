import React, {useState} from 'react'
import Jobs from './components/Jobs/Jobs.js'
import Bookmarks from './components/Bookmarks/Bookmarks.js'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('jobs')

  return (
    <div className="app-container">
      <div className="button-container">
        <button
          className="nav-button jobs-btn"
          onClick={() => setActiveTab('jobs')}
        >
          Jobs
        </button>
        <button
          className="nav-button bookmarks-btn"
          onClick={() => setActiveTab('bookmarks')}
        >
          Bookmarks
        </button>
      </div>
      {activeTab === 'jobs' ? <Jobs /> : <Bookmarks />}
    </div>
  )
}

export default App
