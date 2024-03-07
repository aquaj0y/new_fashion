import React, { useEffect, useState } from 'react'
import Home from "./Home"
import DrinkList from './DrinkList'
import DrinkDetails from './DrinkDetails'
import AlcoholList from './AlcholList'
import NonAlcoholList from './NonAlcoholList'
import {Routes, Route, useLocation} from 'react-router-dom'


export default function Main () {

  const [drink, setDrink] = useState([])
  const [] = useState([])
  const [] = useState([])

  const location = useLocation()

  useEffect(() => {
    const getDrinks = async () => {
      const response = await axios.get(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' +
          new URLSearchParams(location.search).get('search')
      )
      setDrinks(response.data.drinks || [])
    }

    getDrinks()
  }, [location.search])

  return(
    <div>
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
