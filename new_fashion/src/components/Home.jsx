import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {
  const [allDrinks, setAllDrinks] = useState([])

  useEffect(() => {
    
    const getDrinks = async () => {
      let response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
      const drinksArr = response.data.drinks


      const randomArr = []

      for (let i = 0; i < 10; i++){
        let randomNum = Math.floor(Math.random() * drinksArr.length)
        // TODO: update code with check duplicate
        randomArr.push(drinksArr[randomNum])
      }
      console.log(randomArr)

      setAllDrinks(randomArr)
    }
    getDrinks()    
  }, [])

  return(
    <div>
      <h3> This is the Home </h3>
      <h2>Drinks of the day</h2>

      {allDrinks.map((drink) => (
        <div className="drink-card" key={drink.idDrink}>
          <p>{drink.strDrink}</p>
          <img src={drink.strDrinkThumb} alt='pic' />
        </div>
      ))}

    </div>
  )
}