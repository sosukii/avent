import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import 'App.css'
import Layout from 'pages/Layout/Layout.jsx'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} />

          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
