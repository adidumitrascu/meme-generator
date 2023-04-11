import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from './assets/components/Die'

function App() {

  function newDice() {
    const diceArray = []
    for(let i = 0; i < 10; i++) {
      diceArray.push(Math.floor(Math.random() * 6) + 1)
    }
    return diceArray
  }
  
  console.log(newDice())
  return (
    <main>
      <Die number="1"/>
      <Die number="2"/>
      <Die number="3"/>
      <Die number="4"/>
      <Die number="5"/>
      <Die number="6"/>
      <Die number="1"/>
      <Die number="2"/>
      <Die number="3"/>
      <Die number="4"/>
    </main>
  )
}

export default App
