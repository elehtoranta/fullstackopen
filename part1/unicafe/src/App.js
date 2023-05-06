import { useState } from 'react';

// import './Statistics.js'; // NO

const App = () => {
  const [ good, setGood ] = useState(0);
  const [ bad, setBad ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);

  const addGood = () => setGood(good + 1);
  const addBad = () => setBad(bad + 1);
  const addNeutral = () => setNeutral(neutral + 1);

  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = good / total * 100;

  const reviews = [
    { name: "good", count: good },
    { name: "neutral", count: neutral },
    { name: "bad", count: bad }
  ];

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={addGood} content="good"/>
      <Button onClick={addNeutral} content="neutral"/>
      <Button onClick={addBad} content="bad"/>

      <h1>statistics</h1>
      <Statistics
        stats={reviews}
        total={total}
        average={average}
        positive={positive}
      />
    </>
  )
}

// Passing an optional function to transform the data before rendering
const StatLine = ({type, data, fn = (data) => data}) =>
  <li>{type} {fn(data)}</li>

const Statistics = (props) => {
  // I use early returns because I'm not a BABY
  return !props.total ? (
    <p>No feedback given</p>
  ) : (
    <div className="stats">
      <Reviews stats={props.stats}/>
      <StatLine type="all" data={props.total}/>
      <StatLine type="average" data={props.average.toFixed(1)}/>
      <StatLine type="positive" data={props.positive.toFixed(1)}/>
    </div>
  )
}

const Reviews = ({stats}) =>
  stats.map(({name, count}) =>
    <li key={name}>{name} {count}</li>
  )

const Button = ({onClick, content}) =>
  <button onClick={onClick}>{content}</button>

export default App;
