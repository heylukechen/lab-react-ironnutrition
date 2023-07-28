import foods from './foods.json';
import {Row, Col, Divider, Button } from 'antd';
import { useState } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [allFoods, setAllFoods] = useState(foods);
  const [isEmpty, setIsEmpty] = useState(false);

  function searchFood(e) {
    const copy = [...foods];
    const searchFoodList = copy.filter((food) => {
      return food.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    if (searchFoodList.length === 0) {
      setIsEmpty(true);
      setAllFoods(searchFoodList);
      console.log("detected empty")
    } else {
      setIsEmpty(false);
      setAllFoods(searchFoodList);
    }
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

  const [addFormIsShown, setAddFormIsShown] = useState(false);
  function toggleFormVisibility() {
    if (addFormIsShown === true) {
      setAddFormIsShown(false);
    } else {
      setAddFormIsShown(true);
    }
  }

  return (
    <div className="App">
      {addFormIsShown ? <AddFoodForm addNewFood={addNewFood} /> : <></>}
      {addFormIsShown ? (
        <Button onClick={toggleFormVisibility}>Hide form</Button>
      ) : (
        <Button onClick={toggleFormVisibility}>Add new food</Button>
      )}
      <Divider />
      <Search searchFood={searchFood} />
      <Divider>Food List</Divider>
      {!isEmpty &&  <Row style={{ width: '100%', justifyContent: 'center' }}>
        {allFoods.map((food) => {
          return <FoodBox food={food} deleteFood={deleteFood} />;
        })}
      </Row>}
      {isEmpty && <div><h3>Oops! No more food to show</h3></div>}

    </div>
  );
}

export default App;
