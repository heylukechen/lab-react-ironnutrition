import { Card, Col, Button } from 'antd';

const FoodBox = (props) => {
  const { name, calories, image, servings } = props.food;
  const totalCalories = calories * servings;

  return (
    <Col>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height={60} alt="food" />
        <p>{calories}</p>
        <p>{servings}</p>
        <p>
          <b>Total Calories: {totalCalories} </b> kcal
        </p>
        <Button onClick={()=>props.deleteFood(name)} type="primary"> Delete </Button>
      </Card>
    </Col>
  );
};

export default FoodBox;
