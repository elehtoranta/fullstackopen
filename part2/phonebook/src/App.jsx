import { useState } from 'react'

import './App.css'

import NumberList from './NumberList.jsx'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleNameChange = (e) => {
    console.log("Name change target", e.target.value);
    setNewName(e.target.value)
  }

  const addPerson = (e) => {
    e.preventDefault();

    if (!newName) {
      alert("Please enter a name")
      return;
    }

    console.log("Adding a person");
    const newPerson = {
      name: newName.trim()
    }
    setPersons(persons.concat(newPerson));
    setNewName('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <NumberList persons={persons}/>
    </div>
  )

}

export default App
