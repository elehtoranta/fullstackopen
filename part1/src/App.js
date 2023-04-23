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
