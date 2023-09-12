import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

import NumberList from './NumberList.jsx'
import NewContactForm from './NewContactForm.jsx'
import Filter from './Filter.jsx'

const App = () => {
  const [persons, setPersons] = useState([])
  const [search, setSearch] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  // Read the mock 'database'
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log("response data", response.data)
        setPersons(response.data)
      })
  }, [])

  const handleFilter = (e) => setSearch(e.target.value.toLowerCase());

  // Yeah idk about this, this can't be the 'right way'
  const handlePersonDataChange = handler => e => {
    handler === 'name' ? setNewName(e.target.value)
    : handler === 'number' ? setNewNumber(e.target.value)
    : console.log(`Error handling data change\nTarget value: ${e.target.value}`)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <NewContactForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        newNumber={newNumber}
        handlePersonDataChange={handlePersonDataChange}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Filter
        persons={persons}
        handleFilter={handleFilter}
      />
      <NumberList
        persons={persons}
        search={search}
      />
    </div>
  )

}

export default App
