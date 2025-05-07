import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/sidebar'
import Main from './components/maincanvas.jsx'
import ScrollToTop from './components/scroll'

function App () {
  return (
    <Router>
      <div style={{ display: '' }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <ScrollToTop /> 
            <Routes>
              <Route path='/maincanvas' element={<Main />} />
            </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App