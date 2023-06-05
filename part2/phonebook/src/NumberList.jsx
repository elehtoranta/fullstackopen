const NumberList = ({ persons }) =>
  <table>
    <thead>
      <tr>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      {persons.map(person =>
        <Number key={person.name} person={person} />
      )}
    </tbody>
  </table>

const Number = ({ person }) =>
  <tr>
    <td>{person.name}</td>
  </tr>

export default NumberList;
