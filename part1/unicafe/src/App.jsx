import { useState } from 'react'

const Display = (props) => {
  return(
    <h1>{props.text}</h1>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticsLine = (props) => {

  const text = props.text
  const value = props.value
  const sign = props.sign

  if (sign != null) {
    return(
      <tr>
        <td>{text}</td>
        <td>{value} {sign}</td>
      </tr>      
    )
  } else {
    return(
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    )
  }
}

const Statistics = (props) => {

  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const total = props.total
  const average = (good - bad) / total
  const positive = good / total

  if (total == 0) {
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return(
        <div>
          <table>
            <tbody>
              <StatisticsLine text = 'good' value = {good}/>
              <StatisticsLine text = 'neutral' value = {neutral}/>
              <StatisticsLine text = 'bad' value = {bad}/>
              <StatisticsLine text = 'total' value = {total}/>
              <StatisticsLine text = 'average' value = {average}/>
              <StatisticsLine text = 'positive' value = {positive} sign = '%' />
            </tbody>
          </table>
        </div>
    )
  }
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClick = () => {
    const updateGood = good + 1
    setGood(updateGood)
    setTotal(updateGood + neutral + bad)    
  }

  const handleNeutralClick = () => {
    const updateNeutral = neutral + 1
    setNeutral(updateNeutral)
    setTotal(good + updateNeutral + bad)
  }

  const handleBadClick = () => {
    const updateBad = bad + 1
    setBad(updateBad)
    setTotal(good + neutral + updateBad)
  }

  return (
    <div>
      <Display text = 'give feedback'/>
      <Button handleClick = {handleGoodClick} text = 'good'/>
      <Button handleClick = {handleNeutralClick} text = 'neutral'/>
      <Button handleClick = {handleBadClick} text = 'bad'/>
      <Display text = 'statistics'/>
      <Statistics good = {good} neutral = {neutral} bad = {bad} total = {total} />
    </div>
  )
}

export default App