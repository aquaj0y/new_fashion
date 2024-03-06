import React, { useEffect, useState } from 'react'
import Home from "./Home"
import DrinkList from './DrinkList'
import DrinkDetails from './DrinkDetails'
import AlcoholList from './AlcholList'
import NonAlcoholList from './NonAlcoholList'
import {Routes, Route} from 'react-router-dom'


export default function Main () {

  const [drink, setDrink] = useState([])
  const [] = useState([])
  const [] = useState([])

  return(
    <div>
      <h3> This is the Main </h3>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/drinklist" element={ <DrinkList drink={drink}/> } />
        <Route path="/drinklist/:id" element={ <DrinkDetails drink={drink}/> } />
        <Route path="/alcoholdrinklist" element={ <AlcoholList /> } />
        <Route path="/alcoholdrinklist/:id" element={ <DrinkDetails drink={drink}/> } />
        <Route path="/nonalcoholdrinklist" element={ <NonAlcoholList /> } />
        <Route path="/nonalcoholdrinklist/:id" element={ <DrinkDetails drink={drink}/> } />
      </Routes>
    </div>
  )
}
