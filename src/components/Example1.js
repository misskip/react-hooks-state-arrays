import React, { useState } from "react";
import { spicyFoods } from "../data";


function Example1() {
  const [foods] = useState(spicyFoods);
  
const foodList = foods.map((food) =>(
<ul key={food.id}>
    {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
</ul>
));
console.log("Example1" , {foodList})
return (
    <div>
        {foodList}
    </div>
);
}
export default Example1;