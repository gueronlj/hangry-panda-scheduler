import { useState } from 'react'
import Schedule from './components/scheduler.jsx'
import './App.css'

function App() {

  return (
    <div className="App">
      <div>
        <h1>Hangry Panda Scheduler</h1>
        <Schedule/>
      </div>
    </div>
  )
}

export default App
