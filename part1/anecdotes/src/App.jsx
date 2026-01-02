import { useState } from 'react'

const Tittle = ({text}) => {
  return(
    <h1>{text}</h1>
  )
}

const Display = (props) => {
  return(
    <div>
      <p>
        {props.text}
      </p>
    </div>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votos, setVotos] = useState(Array(anecdotes.length).fill(0))

  const handleNextAnecdote = () => {
    const index = Math.floor(Math.random() * anecdotes.length)    
    setSelected(index)
  }

  const handleVotos = () => {
    const copy = [...votos]
    copy[selected] += 1
    setVotos(copy)
  }

  const maxVotes = Math.max(...votos)
  const maxIndex = votos.indexOf(maxVotes)

  return (
    <div>
      <Tittle text = 'Anecdote of the day' />
      <Display text = {anecdotes[selected]}/>
      <p>has {votos[selected]} votes</p>
      <Button onClick = {handleNextAnecdote} text = 'next anecdote'/>
      <Button onClick = {handleVotos} text = 'vote'/>
      <Tittle text = 'Anecdote with most votes' />
      <p>{anecdotes[maxIndex]}</p>
      <p>has {maxVotes} votes</p>
    </div>
  )
}

export default App