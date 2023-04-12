import React from "react"

export default function Die(props) {
  const styles = {background: props.held ? "#59E391" : ""}
  return (
      <div className="dies" style={styles} 
      onClick={() => props.toggle(props.id)}>
        {props.number}
      </div>
  )
}