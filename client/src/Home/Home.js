import React from "react"
import { IMGS } from "./LoadImgs"

const imgCards = []
for (const key in IMGS) {
  imgCards.push(<img src={IMGS[key]} key={key} alt={key} className="mansory_item" />)
}

const Home = () => {
  return (
    <div className="home">
      <div className="mansory">{imgCards}</div>
    </div>
  )
}

export default Home
