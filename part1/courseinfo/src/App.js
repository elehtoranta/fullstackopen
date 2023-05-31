const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      }
    ]
  }

  return (
    <>
      <Header name={course.name}></Header>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </>
  )
}

const Total = ({parts}) => {
  // console.log("In Total", parts);
  const sum = parts.map(parts => parts.exercises).reduce((a, b) => a + b);

  return (
    <p>Number of exercises: {sum}</p>
  )
}

const Header = ({name}) => {
  // console.log("Header", name);

  return (
    <h1>{name}</h1>
  )
}

const Content = ({parts}) => {
  // console.log("Parts", parts);

  // Following map() works also with `name={parts.name} exercises={parts.exercises}`
  return (
    <div>
      {parts.map((parts, i) => <Part {...parts} key={i}/>)}
    </div>
  )
}

const Part = ({name, exercises}) => {
  // console.log("We should have PARTS ffs", name, exercises)
  return (
    <p>{name} {exercises}</p>
  )
}

export default App;
