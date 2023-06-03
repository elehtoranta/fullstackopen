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

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [mostVotedIndex, setMostVotedIndex] = useState(-1);

  function getRandomIndex() {
    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * anecdotes.length);
    } while (randomIndex === selected);
    setSelected(randomIndex);
  }

  /* Apparently this can be done inline with head/modify/tail slices,
  * but it's really not that pretty. */
  function voteAnecdote() {
    const votesCopy = [...votes];

    votesCopy[selected] += 1;
    setVotes(votesCopy);
    // On two equally voted entries, this still sets the first index as
    // the most voted, causing unintuitive changes on ties.
    setMostVotedIndex(() => votesCopy.indexOf(Math.max(...votesCopy)));
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <Anecdote
        className="current-anecdote"
        content={anecdotes[selected]}
        votes={votes[selected]}
      />

      <div className="controls">
        <button onClick={voteAnecdote}>Vote</button>
        <button onClick={getRandomIndex}>Next anecdote</button>
      </div>

      <h1>Most voted anecdote</h1>
      <Anecdote
        className="most-voted-anecdote"
        content={anecdotes[mostVotedIndex]}
        votes={votes[mostVotedIndex]}
        render={mostVotedIndex >= 0}
      />
    </>
  )
}

const Anecdote = ({
  className,
  content,
  votes,
  render=true
}) => {
  return render ? (
    <div className={className}>
      <p>{content}</p>
      <p>Has {votes} votes</p>
    </div>
  ) : ('No votes yet')
}

export default App;
