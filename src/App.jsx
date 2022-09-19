import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

export default function App() {
  let cards = data.map((item) => {
    return <Card key={item.id} item={item} />
  })
  return (
    <div className="app">
      <Navbar />
      <div className="card-container">{cards}</div>
    </div>
  )
}
