// U fokin wot m8

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
  console.log("In Total", parts);
  const sum = parts.map(parts => parts.exercises).reduce((a, b) => a + b);

  return (
    <p>Number of exercises: {sum}</p>
  )
}

const Header = ({name}) => {
  console.log("Header", name);

  return (
    <h1>{name}</h1>
  )
}

const Content = ({parts}) => {
  console.log("Parts", parts);

  // Following map() works also with `name={parts.name} exercises={parts.exercises}`
  // For all I know, this might be HORRIBLE practice, but for now no cap idc
  return (
    <div>
      {parts.map((parts, i) => <Part {...parts} key={i}/>)}
    </div>
  )
}

const Part = ({name, exercises}) => {
  console.log("We should have PARTS ffs", name, exercises)
  return (
    <p>{name} {exercises}</p>
  )
}

/*

const App = () => {
  const props = {
    name: 'Richard Hendricks',
    occupation: 'shit CEO',
  }

  return (
    <>
      <Header />
      <User {...props}/>
      <DateNow />
      <Footer />
    </>
  )}

function DateNow() {
  const date = new Date();
  console.log(date);

  return (
    <p>The time is now {date.toLocaleTimeString()}</p>
  )
}

function User({name, occupation}) {
  console.log(name, occupation)

  return (
    <p>Hello {name}! You're a {occupation}!</p>
  )
}

function Header() {
  return (
    <header>Wassup birdies</header>
  )
}

function Footer() {
  return (
    <footer>The kids aren't alright</footer>
  )
}

*/
export default App;
