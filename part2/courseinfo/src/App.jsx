const App = () => {
  const courses = [
    {
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
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <h1>Course information</h1>

      {courses.map(course => <Course course={course} key={course.id} />)}
    </>
  )
}

const Course = ({ course }) => {
  const {name, parts} = {...course};

  return (
    <div className='course'>
      <CourseHeader name={name}/>
      <Content parts={parts}/>
    </div>
  )
}

const CourseHeader = ({ name }) =>
  <h2>{name}</h2>

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
