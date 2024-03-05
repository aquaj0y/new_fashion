import Home from "./Home"
import DrinkList from './DrinkList'

import {Routes, Route} from 'react-router-dom'


export default function Main () {
  return(
    <div>
      <h3> This is the Main </h3>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/drinklist" element={<DrinkList/>}></Route>
      </Routes>
    </div>
  )
}
