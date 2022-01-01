import React from 'react';
import { spicyFoods } from '../data';


export default Example3;

function Example3({setFoods}) {
 

const newSpicy = [
    { id: 3, name: "Green Curry ", cuisine: "Thai", heatLevel: 9 },
    { id: 4, name: "Enchiladas ", cuisine: "Mexican", heatLevel: 2 },
    { id: 5, name: "5 Alarm Chili ", cuisine: "American", heatLevel: 5 },
  ]
const newSpicyList = newSpicy.map((item) => (
  <ul key={item.id}>{item.name}
  
    | Heat: {item.heatLevel} | Cuisine: {item.cuisine}
  </ul>
))
const clickHandler = (e) => {
  console.log(e.target.value);
  e.preventDefault();
  setFoods([ ...spicyFoods, newSpicy]);
}
  
    return (
      <div>
        <button onClick={clickHandler}>Display New Spicy Food</button>
        {newSpicyList
        }
      </div>
    )
  }
