import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Layout from "./Layout.jsx"
import About from "./pages/About.jsx"
import Tools from "./pages/Tools.jsx"
import Contact from "./pages/Contact.jsx"
import NotFound from './pages/NotFound.jsx'
import './index.css'
import "./site.css"
import {HashRouter, Route, Routes} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<App/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="tools" element={<Tools/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
