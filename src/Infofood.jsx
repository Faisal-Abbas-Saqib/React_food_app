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
        {" "}
        {/*shows detal info about selected food */}
        <img src={detail.strMealThumb} width={200} />
        <p>{detail.strMeal}</p>
        <p>{detail.strArea}</p>
        <p>{detail.strCategory}</p>
        <p>
          {detail.strInstructions.split("\n").map((str) => (
            <p>{str}</p>
          ))}
        </p>
        <NavLink to="/">
          <button
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              padding: "10px",
              borderRadius: "4px",
            }}
          >
            Home
          </button>
        </NavLink>
      </div>
    </>
  );
};
export default Infofood;
