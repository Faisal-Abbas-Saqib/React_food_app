import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

const Infofood = () => {
  const { mealid } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
      .then((response) => response.json())
      .then((data) => {
        setDetail(data.meals[0]);
      });
  }, [mealid]);

  if (!detail) {
    return <h2 className="loading">Loading meal details...</h2>;
  }

  return (
    <>
      <div className="foodInfo">
        <img src={detail.strMealThumb} alt={detail.strMeal} />
        <h3 className="foodTitle">{detail.strMeal}</h3>
        <div className="foodMeta">
          <span>{detail.strArea}</span>
          <span>{detail.strCategory}</span>
        </div>
        <div className="foodInstructions">
          {detail.strInstructions
            .split("\n")
            .filter(Boolean)
            .map((str, idx) => (
              <p key={idx}>{str}</p>
            ))}
        </div>
        <NavLink to="/">
          <button className="homeButton">← Back to Home</button>
        </NavLink>
      </div>
    </>
  );
};

export default Infofood;
