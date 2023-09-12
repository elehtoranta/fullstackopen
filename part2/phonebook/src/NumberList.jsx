import './NumberList.css'

const NumberList = ({ persons, search }) =>
    <div className="numberlist-container">
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

const Number = ({ person }) =>
  <tr>
    <td>{person.name}</td>
    <td>{person.number}</td>
  </tr>

export default NumberList;
