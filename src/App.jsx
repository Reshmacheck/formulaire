import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './components/Form'
import List from './components/List'


function App() {
  const [data, setdata] = useState([])

  return <>
  <Form propssetdata={setdata} propsdata={data}/>
  <List propsdata={data} />
</>
    
}

export default App
