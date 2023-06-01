import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  // console.log(`Anecdotes: ${anecdotes.length}`)

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  console.log(`selected ${selected}, votes ${votes}, votes array length ${votes.length}`);

  function getRandomIndex() {
    let randomIndex;

    do {
      // Note to self: no off-by-one, since random() produces values from 0 to 1 *exclusive*.
      randomIndex = Math.floor(Math.random() * anecdotes.length);
    } while (randomIndex === selected);

    setSelected(randomIndex);
  }

  // Apparently this can be done inline with head/modify/tail slices, but it's really not that pretty.
  function voteAnecdote() {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  }

  /** @return String, the most voted anecdote */
  function getMostVotedAnecdote() {
    console.log((Math.max(...votes)));
    return (anecdotes[votes.indexOf(Math.max(...votes))]);
  }

  return (
    <>
      <div className="current-anecdote">
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>Has {votes[selected]} votes</p>
      </div>
      <div className="controls">
        <Button
          value="Vote"
          onClick={voteAnecdote}
        />
        <Button
          value="Next anecdote"
          onClick={getRandomIndex}
        />
      </div>
      <div className="most-voted-anecdote">
        <h1>Anecdote with most votes</h1>
        <p>{getMostVotedAnecdote()}</p>
      </div>
    </>
  )
}

const Button = ({value, onClick}) => {
  return (
    <button onClick={onClick}>
      {value}
    </button>
  )
}

export default App;