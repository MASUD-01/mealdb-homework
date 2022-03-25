import React, { useEffect } from 'react';
import { useState } from 'react';
import Singalmeal from './Singalmeal/Singalmeal';
import './Meals.css'
import Cart from '../Cart/Cart';


const Meals = () => {
    const [meal, setMeal] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeal(data.meals))
    }, []);
    const [get, getName] = useState([])
    const handlecart = (id) => {
        getName(id)
    }
    return (
        <div className='main-meals' >
            <div className='meals'>
                {
                    meal.map(meal => <Singalmeal handlecart={handlecart} key={meal.strMeal} singalmeal={meal}></Singalmeal>)
                }
            </div>

            <div className='count-info'>
                <Cart get={get}></Cart>
            </div>
        </div>
    );
};

export default Meals;