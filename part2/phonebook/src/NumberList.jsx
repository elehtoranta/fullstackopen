import './NumberList.css'

const NumberList = ({ persons }) =>
  <div className="numberlist-container">
    <h2>Numbers</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Number</th>
        </tr>
      </thead>
      <tbody>
        {persons.map(person =>
          <Number key={person.name} person={person} />
        )}
      </tbody>
    </table>
  </div>

const Number = ({ person }) =>
  <tr>
    <td>{person.name}</td>
    <td>{person.number}</td>
  </tr>

export default NumberList;
