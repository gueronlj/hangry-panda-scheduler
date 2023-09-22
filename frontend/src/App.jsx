import { useState } from 'react'
import Schedule from './components/scheduler.jsx'
import './App.css'
import Header from './components/header/header.jsx'

function App() {

  return (
    <div className="App">
      <Header />
      <div>
        <h2>Weekly Schedule</h2>
        <Schedule/>
      </div>
    </div>
  )
}

export default App
