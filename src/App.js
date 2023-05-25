
import { useState } from 'react';
import './App.css';
import foods from "./foods.json";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from 'antd/es/transfer/search';


function App() {

  const [food, setFood] = useState(foods)
  const [filteredFood , setFilteredFood] = useState(foods)
  const [showingForm, setShowingForm] = useState(false)


  const addProduct = (addProduct) => {
    setFood([...food, addProduct])
    setFilteredFood([...food, addProduct])
    setShowingForm(false)
  }

  const searchFood = (searchFood) => {
    const filteredArr = food.filter((eachFood) =>
    eachFood.name.toLowerCase().includes(searchFood.toLowerCase())
  );
    setFilteredFood(filteredArr)
  }

  const deleteFood = (index) => {
    const clone = [...filteredFood]
    clone.splice(index, 1)
    setFilteredFood(clone)
  }
  
  const toggleForm = () => setShowingForm(!showingForm)

  return (
    <div className="App">
      {/* iteration 4 */}
     {showingForm === true ? <AddFoodForm addProduct={addProduct}/> : null}
      {/* iteration 7 bonus */}
      <button onClick={toggleForm}>{showingForm === true ? "Hide Form" : "Add New Food"}</button>
      {/* iteration 5 */}
      <h3>Search</h3>
      <Search
        placeholder="Search food..."
        onChange={(e) => searchFood(e.target.value)}
      />
      {/* iteration 1 */}
      {/* <h3>Food List</h3>
      {food.map((eachFood, index) => {
        return(
          <div key={index}>
          <h4>{eachFood.name}</h4>
          <img src={eachFood.image} alt="comida" width="200px"/>
        </div>
        )
      })} */}
      {/* iteration 2 */}
      {/* <FoodBox food={ {
          name: "Orange",
          calories: 85,
          image: "https://i.imgur.com/abKGOcv.jpg",
          servings: 1
        }} /> */}
        {/* iteration 3,6 and 8 bonus*/}
        <h3>Food List</h3>
        {filteredFood.length > 0 ? (
        filteredFood.map((eachFood, index) => (
          <div>
            <FoodBox key={index} food={eachFood} deleteFood={() => deleteFood(index)}/>
          </div>
        ))
      ) : (
        <p>No food found.</p>
      )}

      
    </div>
  );
}

export default App;
