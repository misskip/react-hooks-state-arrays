/*
import React, { useState } from "react";
import { spicyFoods } from "../data";

export default Example2;

function Example2() {
  const [spicyFoods, setFoods] = useState([]);

const newSpicyFoods = [
    { id: 3, name: "Green Curry", cuisine: "Thai", heatLevel: 9 },
    { id: 4, name: "Enchiladas", cuisine: "Mexican", heatLevel: 2 },
    { id: 5, name: "5 Alarm Chili", cuisine: "American", heatLevel: 5 },
  ];

const newFoodList = newSpicyFoods.map((newSpicyFoods) =>(
<li key={newSpicyFoods.id}>
    {newSpicyFoods.name} | Heat: {newSpicyFoods.heatLevel} | Cuisine: {newSpicyFoods.cuisine}
</li>
));
console.log("Example2" ,{newFoodList})
setFoods(spicyFoods => spicyFoods.concat(newFoodList))

  function handleAddFood() {
    const newFood = newSpicyFoods();
    const newFoodArray = [...food, newFood];
    setFoods(newFoodArray);
    console.log(newFoodArray)
  } 
  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{newFoodArray}</ul>
    </div>
  );} 
  */