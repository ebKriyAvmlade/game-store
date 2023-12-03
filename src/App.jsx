//App.jsx


import React from "react"
import './App.css'
import Sidebar from "./component/Sidebar"
import Header from "./component/Header"
import Body from "./component/Body"
import Card from "./component/Card"



export default function App() {

  const [gameData, setGameData] = React.useState([])


  

  React.useEffect(() => {
  async function fetchData() {
    const response = await fetch(`https://rawg.io/api/games?token&key=f581cff841c04e59805ba357eb447c1b`)
    const data = await response.json()
    setGameData(data.results)
  }
  fetchData()
}, [])

const cardElement = gameData.map(data => (<Card
 name={data.name} 
 img ={data.background_image} 
 genre={data.genres[0].name}
/>
 ))


  return(
    <div className="main-parent">
      <div className="parent">
        <Header />
          <div className="main-components">
          <Sidebar />
          <div className="body-card">
          <Body />
          <div className="card-parent">
          {cardElement}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )

}
  /*<Card 
          name={gameData[0].name}
          img={gameData[0].background_image}
          />*/