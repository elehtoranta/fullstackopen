export const Course = ({ course }) => {
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

export default Course;
