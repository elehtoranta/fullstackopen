import { useState } from 'react';

const App = () => {
  const [ good, setGood ] = useState(0);
  const [ bad, setBad ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);

  console.log(good, bad, neutral);

  const addGood = () => setGood(good + 1);
  const addBad = () => setBad(bad + 1);
  const addNeutral = () => setNeutral(neutral + 1);

  const stats = [
    { name: "good", count: good },
    { name: "neutral", count: neutral },
    { name: "bad", count: bad }
  ];

  return (
    <div>
      <Header title="give feedback"/>
      <Button onClick={addGood} content="good"/>
      <Button onClick={addNeutral} content="neutral"/>
      <Button onClick={addBad} content="bad"/>
      <Header title="statistics" />
      <Statistics stats={stats}/>
    </div>
  )
}

const Header = ({ title }) =>
      <h1>{title}</h1>

const Statistics = ({stats}) => stats.map(({name, count}) =>
    <li key={name}>{name} {count}</li>
)

const Button = ({onClick, content}) => {
  console.log(onClick, content)
  return (
    <button onClick={onClick}>{content}</button>
  )
}

export default App;
