import { useState } from 'react'

import './App.css'

import NumberList from './NumberList.jsx'
import NewContactForm from './NewContactForm.jsx'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: "0401234567"
    }
  ])

  return (
    <div>
      <h1>Phonebook</h1>
      <NewContactForm persons={persons} setPersons={setPersons}/>
      <NumberList persons={persons}/>
    </div>
  )

}

export default App
