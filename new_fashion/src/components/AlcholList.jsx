import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AlcoholList() {
  const navigate = useNavigate();
  let showItem = (id) => {
    navigate(`${id}`);
  };

  const [allDrinks, setAllDrinks] = useState([]);

  useEffect(() => {
    const getAllDrinks = async () => {
      const alcoholic = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
      );
      const allTheDrinks = alcoholic.data.drinks;

      setAllDrinks(allTheDrinks);
    };
    getAllDrinks();
  }, []);

  if (!allDrinks) {
    return <h1>Loading drinks, please wait</h1>;
  } else {
    return (
      <div className="grid">
        {allDrinks.map((drink, index) => (
          <div
            className="card"
            key={drink.idDrink}
            onClick={() => showItem(drink.idDrink)}
          >
            <h1>{drink.strDrink}</h1>
            <img src={drink.strDrinkThumb} alt="" />
          </div>
        ))}
      </div>
    );
  }
}
