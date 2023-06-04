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
  const {name, id, parts} = {...course};

  return (
    <>
      <Header name={name}></Header>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </>
  )
}

const Header = ({name}) => {
  return (
    <h1>{name}</h1>
  )
}

const Content = ({parts}) =>
  <div className="content">
    {parts.map((part) => <Part {...part} key={part.id}/>)}
  </div>


const Total = ({ parts }) => {
  const sum = parts.map(parts => parts.exercises).reduce((a, b) => a + b);

  return (
    <p>Number of exercises: {sum}</p>
  )
}

const Part = ({name, exercises}) =>
  <p>{name} {exercises}</p>

export default App;
