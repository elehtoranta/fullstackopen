import { useState } from 'react'

import './NumberList.css'

const NumberList = ({ persons }) => {
  const [search, setSearch] = useState('')

  const handleSearch = (e) => setSearch(e.target.value.toLowerCase());

  return (
    <div className="numberlist-container">
      <h2>Numbers</h2>
        <label htmlFor='search-contact-name'>Search a name</label>
      <input
        id='search-contact-name'
        type='text'
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {persons
            .filter(person => person.name.toLowerCase().includes(search))
            .map(person =>
            <Number key={person.name} person={person} />
          )}
        </tbody>
      </table>
    </div>
  )

}

const Number = ({ person }) =>
  <tr>
    <td>{person.name}</td>
    <td>{person.number}</td>
  </tr>



export default NumberList;
