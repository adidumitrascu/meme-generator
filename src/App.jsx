import { useState } from 'react'
import './App.css'
import Die from './assets/components/Die'

function App() {

  const [dice, setDice] = useState(newDice())

  function handleRoll(){
    setDice(newDice())
  }

  function newDice() {
    const diceArray = []
    for(let i = 0; i < 10; i++) {
      diceArray.push(Math.floor(Math.random() * 6) + 1)
    }
    const arrayObj = diceArray.map(el => ({
      value: el,
      isHeld: false
    }))
    return arrayObj
  }

  const diceEl = dice.map(el => <Die number={el.value} />)
  
  return (
    <main>
      <div className="flex--container">
        <div className="dies--boxes">
          {diceEl}
        </div>
        <button onClick={handleRoll}>Roll</button>
      </div>
    </main>
  )
}

export default App
