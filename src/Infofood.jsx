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
  }, [mealid]); // runs only  if meal id is changed
  if (!detail) {
    return <h2 className="loading">Loading meal details...</h2>;
  }
  return (
    <>
      <div className="foodInfo">
        <img src={detail.strMealThumb} alt={detail.strMeal} />
        <h2 style={{ backgroundColor: "#0b9ddc", color: "white", marginTop: "0" }}>
          {detail.strMeal}
        </h2>
        <p>
          <strong>Area:</strong> {detail.strArea}
        </p>
        <p>
          <strong>Category:</strong> {detail.strCategory}
        </p>
        <div>
          <strong>Instructions:</strong>
          {detail.strInstructions.split("\n").map((str, idx) => (
            <p key={idx}>{str}</p>
          ))}
        </div>
        <NavLink to="/">
          <button
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
            }}
          >
            ← Back to Home
          </button>
        </NavLink>
      </div>
    </>
  );
};
export default Infofood;
