import React, { useState } from "react";
import Example1 from "./Example1";
import Example3 from "./Example3"
import { spicyFoods , newSpicyFoods } from "../data";

function App() {
  const [spicyFoods, setFoods] = useState([]);  
  return (
    <div>
      <h3>Spicy Food List</h3>
      <Example1 />
   
      <Example3 setFoods={setFoods}/>
    
    </div>
  );
}

export default App;
