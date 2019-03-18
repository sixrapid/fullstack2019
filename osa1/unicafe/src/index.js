import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ text, clickHandler }) => (
  <button onClick={clickHandler}>
    {text}
  </button>
)

const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0 ) {
    return (<div> Ei yhtään palautetta annettu. </div>)
  }

  return (
    <table>
      <tbody>
        <Statistic text="hyvä" value={good}/>
        <Statistic text="neutraali" value={neutral}/>
        <Statistic text="huono" value={bad}/>
        <Statistic text="yhteensä" value={good + neutral + bad}/>
        <Statistic text="keskiarvo" value={(good - bad) / (good + neutral + bad)}/>
        <Statistic text="positiivisia" value={100 * good / (good + neutral + bad) + "%"}/>
      </tbody>
    </table>
  )
}
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodHandler = () => setGood(good + 1)
  const neutralHandler = () => setNeutral(neutral + 1)
  const badHandler = () => setBad(bad + 1)

  return (
    <div>
      <Header text="anna palautetta" />
      <Button text="hyvä" clickHandler={goodHandler}/>
      <Button text="neutraali" clickHandler={neutralHandler}/>
      <Button text="huono" clickHandler={badHandler}/>
      <Header text="statistiikka" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)