// No-stack application dev for a stupid C programmer
// import Counter from "./Counter.js";
import {useState} from 'react';
import Button from './Button.js';

const App = () => {
  // State hooks need to go up here because Meta KEKW
  const [counter, setCounter] = useState(0);

  const incrementCount = () => {setCounter(counter + 1)};
  const decrementCount = () => {setCounter(counter - 1)};
  const resetCount = () => {setCounter(0)};

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
      <p>Stupid button count {counter}</p>
      <Button e={incrementCount} text="+"/>
      <Button e={decrementCount} text="-"/>
      <Button e={resetCount} text="0"/>
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
    <header>
      <h1>{name}</h1>
    </header>
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
  console.log("We should have PARTS", name, exercises)
  return (
    <p>{name} {exercises}</p>
  )
}

/*
// some MEE-MEES for now
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
