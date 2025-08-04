import { useState, useEffect } from 'react'

import { NavLink, useParams } from 'react-router-dom'

const Infofood = () => {
                        const {mealid}=useParams();
                        const [detail,setDetail ]= useState([]) ;
  useEffect(() => {
                   fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
                  .then(response => response.json())
                  .then(data => { setDetail(data.meals[0]);
                  });
                
                }, [mealid]) // runs only  if meal id is changed     
       
  return (
    <>       
         <div className='foodInfo'>   {/*shows detal info about selected food */}
           <img  src={detail.strMealThumb}  width={200} />  
          <p>{detail.strMeal}</p>
          <p>{detail.strArea}</p>
          <p>{detail.strCategory}</p>
          <p>{detail.strInstructions}</p>
          <NavLink to="/"></NavLink>      {/*connect to main page (APP)*/}
        </div>             
       </>
  )
}
export default Infofood
