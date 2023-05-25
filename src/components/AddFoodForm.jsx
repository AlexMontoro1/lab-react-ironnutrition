import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm({addProduct}) {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)

    const handleName = (event) => {
        const capitalizedValue = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
        setName(capitalizedValue);
      };
    const handleImage = (event) => setImage(event.target.value)
    const handleCalories = (event) => {
        if(event.target.value >= 0){
            setCalories(event.target.value)
        }} 
    const handleServings = (event) => {
        if(event.target.value >= 0){
            setServings(event.target.value)
        }} 

    const handleSubmit = (event) => {
        event.preventDefault()
        const newFood = {
            name,
            image,
            calories,
            servings
        }
        addProduct(newFood)

        setName("")
        setImage("")
        setCalories(0)
        setServings(0)
    }



  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleName} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImage} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleCalories} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={handleServings} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
