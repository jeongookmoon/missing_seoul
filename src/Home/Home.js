import React from "react"
import { IMGS } from "./LoadImgs"

const imgCards = [], imgCards2 = [], imgCards3 = []
let i = 0
for (const key in IMGS) {
  if (i <= 3)
    imgCards.push(<img src={IMGS[key]} key={key} alt={key} className="landingImg" />)
  else if (i <= 7)
    imgCards2.push(<img src={IMGS[key]} key={key} alt={key} className="landingImg" />)
  else
    imgCards3.push(<img src={IMGS[key]} key={key} alt={key} className="landingImg" />)
  i++
}

const Content = () => {
  return (
    <div className="content">
      <div className="imgCardCol">{imgCards}</div>
      <div className="imgCardCol">{imgCards2}</div>
      <div className="imgCardCol">{imgCards3}</div>
    </div>
  )
}

export default Content
