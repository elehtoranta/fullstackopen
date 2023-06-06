import { useState } from 'react'

import './NewContactForm.css'

const NewContactForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  // Yeah idk about this, this can't be the 'right way'
  const handlePersonDataChange = handler => e => {
    handler === 'name' ? setNewName(e.target.value)
    : handler === 'number' ? setNewNumber(e.target.value)
    : console.log(`Error handling data change\nTarget value: ${e.target.value}`)
  }

  const addPerson = (e) => {
    e.preventDefault()

    // Validation
    if (!newName || !newNumber) {
      alert(
        `Please enter all details.\n`
          + `You've entered:\n`
          + `Name: ${newName ? newName : "None given"}\n`
          + `Number: ${newNumber ? newNumber : "None given"}`
      )
      return;
    }

    const formattedName = newName.trim()
    const formattedNumber = newNumber
    .split(" ")
    .reduce((number, substring) => number + substring)

    // TODO: duplication and verbose, figure out a neater solution
    if (persons.map(person => person.name).includes(formattedName)) {
      alert(`Contact with the name ${formattedName} is already added to the phonebook`)
      return;
    }

    if (persons.map(person => person.number).includes(formattedNumber)) {
      alert(`Contact with number ${formattedNumber} is already added to the phonebook`)
      return;
    }


    console.log("Adding a person")
    const newPerson = {
      name: formattedName,
      number: formattedNumber
    }
    setPersons(persons.concat(newPerson))

    setNewName('')
    setNewNumber('')
  };

  return (
    <div className="new-contact-container">
      <h2>Add a contact</h2>
      <form>
        <div className="contact-inputs-container">
          <div className="input-container">
            <label htmlFor="name">Full name: </label>
            <input
              id="user-name"
              type="text"
              size="20"
              value={newName}
              onChange={handlePersonDataChange('name')}
              required
            />

          </div>
          <div className="input-container">
            <label htmlFor="number">Phone number: </label>
            <input
              id="user-number"
              type="tel"
              size="10"
              minLength="12"
              maxLength="12"
              placeholder="XXX XXXX XXX"
              value={newNumber}
              onChange={handlePersonDataChange('number')}
              required
            />
          </div>
        </div>
        <div>
          <button type="submit" onClick={addPerson}>Submit my details</button>
        </div>
      </form>
    </div>
  )
}

export default NewContactForm;
