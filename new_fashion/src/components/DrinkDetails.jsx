import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import axios from "axios";
import Header from './Header'
import '../componentsStyles/drinkdetails.css'

export default function DrinkDetails() {
  let { id } = useParams();
  const [drink, setDrink] = useState("");

  useEffect(() => {
    const getDrink = async () => {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      setDrink(response.data.drinks[0]);
    };
    getDrink();
  }, []);

  const ingredients = [];
  const amounts = [];
  for (let i = 1; i < 16; i++) {
    ingredients.push("strIngredient" + i);
  }

  for (let i = 1; i < 16; i++) {
    amounts.push("strMeasure" + i);
  }

  return (
    <div className="details-card">
      <Header allowSearch={true} />
      <h1>{drink.strDrink}</h1>
      <img src={drink.strDrinkThumb} alt="" />
      <h3>Type of Glass: {drink.strGlass}</h3>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) =>
          drink[`${ingredient}`] ? (
            <li className='ingredient-list' key={index}>
              {drink[amounts[index]]}
              {drink[`${ingredient}`]}
            </li>
          ) : null
        )}
      </ul>
      <h2>Instructions</h2>
      <h3>{drink.strInstructions}</h3>
      <Link className='return-link' to="/drinklist"> Return to Drink list!</Link>
    </div>
  );
}
