import foods from './foods.json';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useState } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { isVisible } from '@testing-library/user-event/dist/utils';

function App() {
  const [allFoods, setAllFoods] = useState(foods);

  function searchFood(e) {
    const copy = [...foods];
    const searchFoodList = copy.filter((food) => {
      return food.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setAllFoods(searchFoodList);
  }

  function deleteFood(name) {
    const newList = allFoods.filter((food) => {
      return food.name !== name;
    });
    setAllFoods(newList);
  }

  const addNewFood = (newFood) => {
    const updatedFood = [...foods, newFood];
    setAllFoods(updatedFood);
  };

  const [isShown, setIsShown] = useState(false);

  return (
    <div className="App">
      <AddFoodForm addNewFood={addNewFood} />
      <Button>Show</Button>
      <Divider />
      <Search searchFood={searchFood} />
      <Divider />
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {allFoods.map((food) => {
          return <FoodBox food={food} deleteFood={deleteFood} />;
        })}
      </Row>
    </div>
  );
}

export default App;
