import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import HomePage from './pages/HomePage/HomePage'

function App() {
  return (
    <Router basename='/'>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
