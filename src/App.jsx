import { useState, useEffect} from 'react'
import './App.css'
import Die from './assets/components/Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {

  const [dice, setDice] = useState(newDice())

  const [tenzies, setTenzies] = useState(false)


  useEffect(() => {
    setTenzies(() => {
      const held = dice.every(el => el.isHeld)
      const firstValue = dice[0].value
      const allValue = dice.every(el => el.value === firstValue)
      if(held && allValue) {
        setTenzies(true)
        console.log("You won")
      }
      tenzies ? setDice(newDice()) : ""
    })
    
  },[dice])
  
  function handelDice(id) {
    setDice(prevSet => prevSet.map(el => {
        return el.id === id ?
         {...el, isHeld: !el.isHeld} :
          el
      })
    )
  }

  function handleRoll(id){
    setDice(prevSet => prevSet.map(el => {
      return el.isHeld ? el : {
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: nanoid()
      }
    }))
  }

  function newDice() {
    const diceArray = []
    for(let i = 0; i < 10; i++) {
      diceArray.push(Math.floor(Math.random() * 6) + 1)
    }
    const arrayObj = diceArray.map(el => ({
      value: el,
      isHeld: false,
      id: nanoid()
    }))
    return arrayObj
  }
  const diceEl = dice.map(el => (
    
    <Die number={el.value}
        key={el.id}
        held={el.isHeld}
        id={el.id}
        toggle={() => handelDice(el.id)} 
        />
      
    
    ))
  return (
    <main>
      {tenzies && <Confetti />}
      <div className="title--container">
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
        Roll until all dice are the same. 
        Click each die to freeze it at its
         current value between rolls.</p>
      </div>
      <div className="flex--container">
        <div className="dies--boxes">
          {diceEl}
        </div>
        <button onClick={handleRoll}>{tenzies ?
         "New Game" : "Roll"}</button>
      </div>
    </main>
  )
}

export default App
