

import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox({food: {name, calories, image, servings }, deleteFood, index}) {
    const totalCalories = calories * servings;

    const handleDelete = () => {
        deleteFood(index)
      };
  return (
    <Col>
      <Card
        title={name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {totalCalories} </b> kcal
        </p>
        <Button type="primary" onClick={handleDelete}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;