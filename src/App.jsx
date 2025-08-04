import { useState, useEffect } from 'react';
import './App.css'
import Infofood from './Infofood';
import Header1 from './assets/Header1';
import Footer1 from './assets/Footer1';
import { Route, Routes } from 'react-router-dom'
import { NavLink } from 'react-router-dom';


function App() {
  const[search,setSearch]=useState("");   // search  for food item
  const[data, setData] = useState([]);   
  const[message,setMessage]=useState("");   // show msg if no text entered
  const[foodFetch, setFoodFetch] = useState(false); // only run useEffect hook if state is true
 

 useEffect(() => {

  if(foodFetch){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => {
       return res.json();})
      .then((data) => {console.log(data);
        setData(data.meals);
            }) ; setFoodFetch(false);}
    }, [foodFetch]);           // only runs if state is changed

    function foodSelect1()           // run function if search button is clicked
                          {
                              if(search==""){
                              setMessage("Please enter Food type!");
                              setSearch("");
                          }
      else {
             setFoodFetch(true);
             setMessage("");
            }
    };
 
      return (
                <>   
          <Header1/> 
    
      <div className='searchBar'>                                
      <input type='text' placeholder='Write food name' value={search}
      onChange={e => setSearch(e.target.value.toLowerCase())}/>{console.log(search)} 
      <button onClick={foodSelect1}>Search</button>
       </div>       
       
         <h3>{message}</h3>   {/* shows msg if no text is entered in search bar*/ }

  <div className='Fetchapi'>           {/*shows search food items */}               
          
          {!data? <h1>" No data found!" </h1>: data.map((data2) => { console.log(data2);
      return(        
             <div className='imagesApi'>     
             <img  src={data2.strMealThumb}  width={150}
             className="image-border"/>  
  <NavLink to={`/${data2.idMeal }`}><button >{data2.strMeal}</button></NavLink> {/* send mealid to Infofood*/}                  
             </div>  
         ) })}            
    </div>

      <Routes>
        <Route path="/:mealid" element={<Infofood />} />        
      </Routes>               
<Footer1/>

</>  )
  }
export default App
