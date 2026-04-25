import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Api_pic from "./assets/Api_pic.jpg"; // Import is correct here

function Home() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [foodFetch, setFoodFetch] = useState(false);

  useEffect(() => {
    if (foodFetch) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data.meals);
        });
      setFoodFetch(false);
    }
  }, [foodFetch, search]);

  function foodSelect1() {
    if (search.trim() === "") {
      setMessage("Please enter Food type!");
      setSearch("");
    } else {
      setFoodFetch(true);
      setMessage("");
    }
  }

  return (
    <div>
      {/* ADDED: Visual Header with Api_pic */}

      <div className="searchBar">
        <input
          type="text"
          placeholder="Write food name"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button onClick={foodSelect1}>Search</button>
      </div>

      <h3 style={{ textAlign: "center", color: "red" }}>{message}</h3>

      <div className="Fetchapi" style={{ backgroundImage: `url(${Api_pic})` }}>
        {!data ? (
          <h1>"No data found!"</h1>
        ) : (
          data.map((data2) => (
            <div className="imagesApi" key={data2.idMeal}>
              <img
                src={data2.strMealThumb}
                className="image-border"
                alt={data2.strMeal}
              />

              <NavLink to={`/${data2.idMeal}`}>
                <button className="mealButton">{data2.strMeal}</button>
              </NavLink>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
