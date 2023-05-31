import { useState } from 'react';

const App = () => {
  const [ good, setGood ] = useState(0);
  const [ bad, setBad ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);

  // TODO make an 'incrementer' function factory? Wth is currying?
  const addGood = () => setGood(good + 1);
  const addBad = () => setBad(bad + 1);
  const addNeutral = () => setNeutral(neutral + 1);

  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = good / total * 100;

  const stats = [
    { name: "good", count: good },
    { name: "neutral", count: neutral },
    { name: "bad", count: bad }
  ];

  return (
    <>
      <div className="feedback-wrapper">
        <h1>give feedback</h1>
        <Button onClick={addGood} content="good"/>
        <Button onClick={addNeutral} content="neutral"/>
        <Button onClick={addBad} content="bad"/>
      </div>

      <div className="stats-wrapper">
        <h1>statistics</h1>
        <Statistics
          stats={stats}
          total={total}
          average={average}
          positive={positive}
        />
      </div>
    </>
  );
}

const Statistics = (props) => {
  return !props.total ? (
    <p>No feedback given</p>
  ) : (
      <table className="stats">
        <tbody>
          <Reviews stats={props.stats}/>
          <StatLine type="all" data={props.total}/>
          <StatLine type="average" data={props.average.toFixed(1)}/>
          <StatLine
            type="positive"
            data={props.positive.toFixed(1)}
            fn={(data) => data + " %"}
          />
        </tbody>
      </table>
    )
}

const Reviews = ({stats}) =>
  stats.map(({name, count}) =>
    <tr key={name}><td>{name}</td><td>{count}</td></tr>
  )

// Passing an optional function to transform the data before rendering
// Now only used to add a type suffix because brogrammer is lazy/bad
const StatLine = ({type, data, fn = (data) => data}) =>
  <tr><td>{type}</td><td>{fn(data)}</td></tr>

const Button = ({onClick, content}) =>
  <button onClick={onClick}>{content}</button>

export default App;
