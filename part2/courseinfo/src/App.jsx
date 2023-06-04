const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <Course course={course} />
  )
}

const Course = ({ course }) => {
  const {name, parts} = {...course};

  return (
    <div className='course'>
      <Header name={name}/>
      <Content parts={parts}/>
    </div>
  )
}

const Header = ({ name }) =>
  <h1>{name}</h1>

const Content = ({ parts }) =>
  <div className="content">
    <table>
      <thead>
        <tr>
          <th>Part</th>
          <th>Exercises</th>
        </tr>
      </thead>

      <tbody>
        {parts.map((part) => <Part {...part} key={part.id}/>)}
      </tbody>

      <Total parts={parts}/>
    </table>
  </div>

const Total = ({ parts }) => {
  const sum = parts.map(parts => parts.exercises).reduce((a, b) => a + b);

  return (
    <tfoot>
      <tr>
        <td>Total</td>
        <td>{sum}</td>
      </tr>
    </tfoot>
  )
}

const Part = ({ name, exercises}) =>
  <tr>
    <td>{name}</td>
    <td>{exercises}</td>
  </tr>

export default App;
