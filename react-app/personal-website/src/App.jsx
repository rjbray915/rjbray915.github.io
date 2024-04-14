import { useState } from 'react'
import Helmet from "react-helmet"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  var test_list = [
    {title: "First"},
    {title: "Second"},
    {title: "Third"}
  ]
  const render_list = test_list.map(element =>
    <li>{element.title}</li>
  )

  return (
    <>
      <Helmet>
        <title>Robert Bray</title>
      </Helmet>
      <div class="left-aligned">
        <h2>Home</h2> 
      </div>
    </>
      
  )
}

export default App
