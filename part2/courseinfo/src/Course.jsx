export const Course = ({ course }) =>
  /* Don't know if this 'name construction' is good, but it makes DOM inspection clearer. */
  <div className='course' name={`${course.id}: ${course.name}`}>
    <CourseHeader name={course.name}/>
    <Content parts={course.parts}/>
  </div>

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

const Total = ({ parts }) =>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>
        {parts
          .map(parts => parts.exercises)
          .reduce((sum, ex) => sum + ex)}
      </td>
    </tr>
  </tfoot>

const Part = ({ name, exercises}) =>
  <tr>
    <td>{name}</td>
    <td>{exercises}</td>
  </tr>

export default Course;
