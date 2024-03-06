import axios from "axios"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../componentsStyles/drinklist.css'


export default function DrinkList () {
  const navigate=useNavigate()
  let showItem=(id)=>{
    navigate(`${id}`)
}

  const [allDrinks, setAllDrinks]=useState([])

  useEffect(()=>{
    const getAllDrinks= async()=>{
      const alcoholic= await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
      const nonalcoholic= await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
      const allTheDrinks=[...alcoholic.data.drinks, ...nonalcoholic.data.drinks]
      console.log(alcoholic)

      setAllDrinks(allTheDrinks)



    }
    getAllDrinks()
  }, [])
  console.log(allDrinks)

  if(!allDrinks){
    return <h1>Loading drinks, please wait</h1>
  }

  else {
    return(
      <div className="grid">
        {allDrinks.map((drink, index)=>(
          <div className="card" key={drink.idDrink} onClick={()=> showItem(drink.idDrink)}>
            <img src={drink.strDrinkThumb} alt="" />
            <h2>{drink.strDrink}</h2>
          </div>
        ))}

      </div>
    )

  }


}
