import { useState } from 'react'
import './App.css'
import './site.css'

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
      
    </>
  )
}

export default App
